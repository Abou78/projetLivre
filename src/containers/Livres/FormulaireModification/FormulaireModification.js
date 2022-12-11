import React, {Component} from "react";
import Bouton from "../../../components/Bouton/Bouton";

class ModificationLivre extends Component{
    state = {
        titreSaisie: this.props.titre,
        auteurSaisie: this.props.auteur,
        nbPagesSaisie: this.props.nbPages,
    }

    handleValidation = () => {
        this.props.validationModification(this.props.id, this.state.titreSaisie, this.state.auteurSaisie, this.state.nbPagesSaisie)
    }
    render(){
        return (
            <>
                <td><input type="text" className="form-control" value={this.state.titreSaisie} onChange={(event) => this.setState({titreSaisie:event.target.value})}/></td>
                <td><input type="text" className="form-control" value={this.state.auteurSaisie} onChange={(event) => this.setState({auteurSaisie:event.target.value})} /></td>
                <td><input type="text" className="form-control" value={this.state.nbPagesSaisie} onChange={(event) => this.setState({nbPagesSaisie:event.target.value})} /></td>
                <td><Bouton typeBtn="btn-primary" clic={this.handleValidation}>Valider</Bouton> </td>

            </>

        );
    }
}

export default ModificationLivre;