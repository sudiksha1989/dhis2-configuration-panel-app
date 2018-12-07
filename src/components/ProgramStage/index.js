import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock, Col ,Form} from 'react-bootstrap';

class ProgramStage extends React.Component {
    render() {
        return (
            <div className="display-form">
                <div className="header"><span className="headertext">CREATE PROGRAM STAGE /SECTIONS </span></div>
                <div className="body-content">
                    <div className="left-view">
                        <Form horizontal>
                            <FormGroup controlId="formTEI" >
                                <ControlLabel>PROGRAM NAME</ControlLabel>
                                <FormControl type="text" placeholder="Program" disabled/>
                             </FormGroup>

                            <FormGroup controlId="formOptnSettTest" >
                                <ControlLabel>ORGANISM GROUP</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>

                            <FormGroup controlId="formQueueSet">
                                <ControlLabel>SAMPLE TYPE</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">...</option>
                                </FormControl>
                               
                            </FormGroup>

                            <FormGroup controlId="formConcen" >
                                <ControlLabel>DATA ELEMENTS</ControlLabel>
                                <FormControl componentClass="select" multiple>
                                    <option value="select">select (multiple)</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>

                            <FormGroup controlId="formSampleSource" >
                                <ControlLabel>SPECIAL TEST</ControlLabel>
                                <FormControl componentClass="select" multiple>
                                    <option value="select">select (multiple)</option>
                                    <option value="other">...</option>
                                </FormControl>{' '}
                                <FormControl componentClass="select" multiple>
                                    <option value="select">select (multiple)</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>
                            <Button className="button" type="submit">Create</Button>
                        </Form>
                    </div>
                    <div className="right-view">
                        <div className="responsetable">
                            <table id="displayDE">
                                <tr>
                                    <th>DATA ELEMENTS</th>
                                    <th>RESPONSE</th>
                                </tr>

                            </table>
                        </div>
                    </div>
                </div></div >

        )

    }

}

export default ProgramStage