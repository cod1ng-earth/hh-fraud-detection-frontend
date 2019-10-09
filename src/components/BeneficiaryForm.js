import React from 'react'

import structure from "../lib/structure"

import { Box, CheckBox, FormField, RadioButtonGroup, TextInput } from 'grommet'

export default class BeneficiaryForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
        Object.keys(structure.beneficiaryColumns).forEach(key => {
            switch (structure.beneficiaryColumns[key].type) {
                case "TextBox": this.state[key] = ""; break;
                case "Checkbox": this.state[key] = false; break;
                case "RadioButtonGroup": this.state[key] = structure.beneficiaryColumns[key]['props']['options'][0]
            }

        })
    }

    setValue(field, val) {
        this.setState({ [field]: val })
        console.log(field)
        console.log(this.state)
    }

    render() {
        return Object.keys(structure.beneficiaryColumns).map((key, i) => {

            const def = structure.beneficiaryColumns[key]
            let comp;
            switch (def.type) {
                case "TextInput":
                    comp = <FormField label={key}>
                        <TextInput
                            value={this.state[key]}
                            {...def.props}
                            onChange={event => this.setValue(key, event.target.value)}
                        />
                    </FormField>
                    break;
                case "RadioButtonGroup":

                    comp =
                        <Box margin={{ vertical: "medium" }}>
                            <label htmlFor={key}>{key}</label>
                            <RadioButtonGroup
                                name={key}
                                value={this.state[key]}
                                {...def.props}
                                onChange={event => this.setValue(key, event.target.value)}
                            />
                        </Box>
                    break;
                case "Checkbox":
                    comp =
                        <Box margin={{ vertical: "small" }}>
                            <CheckBox
                                {...def.props}
                                checked={this.state[key]}
                                label={key}
                                onChange={event => this.setValue(key, event.target.checked)}
                            />
                        </Box>
                    break;

            }

            return <Box key={key}>
                {comp}
            </Box>

        })
    }


}