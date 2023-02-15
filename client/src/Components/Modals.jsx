import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Modals = () => {
    const ModalInfo = [
        { name: "Q-LESS Transport Card", bodyText: "Valid up to 5 years after the last used date. Initial load of P100. Fixed rate of P15 will be deducted regardless of station.", specialConditions: "None.", modalName: "cardModal1" },
        { name: "Q-LESS Discounted Transport Card", bodyText: "Valid up to 3 years after the last used date. initial load of P500. P10 will be deducted regardless of station", specialConditions: "Senior Citizen (##-####-####) or PWD (####-####-####) is needed", modalName: "cardModal2" }
    ]

    const modalMap = (modal, index) => {
        return (
            <div className="modal fade" id={modal.modalName} aria-labelledby="exampleModalLabel" aria-hidden="true" index={index} key={index}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{modal.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Description: {modal.bodyText}</p>
                            <p>Special Conditions: {modal.specialConditions}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <Link to="/SignUpPage"><button type="button" className="btn btn-primary" data-bs-dismiss="modal">Continue</button></Link>
                        </div>
                    </div>
                </div>
                <Outlet/>
            </div>)
    }
    return (
        <div>
            {ModalInfo.map(modalMap)}
        </div>
    )
}

export default Modals