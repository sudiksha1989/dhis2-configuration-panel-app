import axios from "axios";

//get post
export const getDataElementValues = () => dispatch => {
  axios.all([
    axios.get('../../trackedEntityInstances.json?fields=trackedEntityInstance,attributes[attribute,value,code]&program=p5lnyTwdbgK&ou=ANGhR1pa8I5&attribute=EelqIyr5wQU&ouMode=DESCENDANTS&skipPaging=true'),
    axios.get('../../optionSets/hz1AYyo8PJX.json?fields=displayName,options[id,name]&skipPaging=true'),
    axios.get('../../optionSets/RMttjsHdy3w.json?fields=displayName,options[id,name]&skipPaging=true'),
    axios.get('../../optionSets/Sxg3SihDRG3.json?fields=displayName,options[id,name]&skipPaging=true'),
  ])
    .then(axios.spread((res1, res2, res3, res4) => {
      // var firstChar = [], attr = res1.data.trackedEntityInstances, optnArr = [], optnArrVal = {};
      // attr.map(attrVal => {
      //   firstChar.push(attrVal.attributes[0].value.charAt(0))
      // });

      // firstChar = firstChar.filter((v, i) => firstChar.indexOf(v) === i);
      // firstChar.sort();
      // //listitems=firstChar.map(str=><li><a><span>{str}</span></a></li>)
      // firstChar.map(str => {
      //   optnArr[str] = [];
      //   for (var i = 0; i < attr.length; i++) {
      //     if (attr[i].attributes[0].name.charAt(0) == str)
      //       optnArr[str].push(attr[i].attributes[0].name);
      //   }
      //   optnArrVal.length = 0;
      // })

      dispatch({
        type: "GET-ENROLLMENTS",
        attrPayload: res1.data,
        testTypePayload: res2.data,
        guidelinePayload: res3.data,
        sampleSourcePayload: res4.data,
        firstChar: res1.data.trackedEntityInstances.map(attrVal => 
         (attrVal.attributes[0].value.charAt(0)).filter((v, i) => attrVal.attributes[0].value.charAt(0).indexOf(v) === i)
          ),
       // optnArr: optnArr,
      })
    })).catch(err =>
      dispatch({
        type: 'GET-ENROLLMENTS',
        error: err
      }));


};

//get
export const getPeriods = () => dispatch => {
  axios
    .get('../../periodTypes.json')
    .then(res =>
      dispatch({
        type: 'GET_PERIODS',
        payload: res.data.periodTypes
      }))
    .catch(err =>
      dispatch({
        type: 'GET_PERIODS',
        payload: null
      }))
}

//post dataElements
export const postDataElements = (data) => dispatch => {

  data.map(de => {
    var formName = []
    axios.post('../../dataElements/',
      de)
      .then(function (response) {
        console.log(response.status);
        formName[(JSON.parse(response.config.data)).name] = response.statusText;
        dispatch({
          type: 'RECEIVED-RESPONSE',
          formName: formName
        })
      })
      .catch(function (error) {
        console.log(error.status);
      });

  }
  )
}
