import React, {Component} from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

import './people-page.css';

export default class PeoplePage extends Component {
    state = {
        selectedPerson: null,
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson});
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItmSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        );
    }
}
