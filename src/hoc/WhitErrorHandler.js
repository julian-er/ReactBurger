import React, {Component} from 'react'
import Modal from '../Components/UI/Modal'
import Aux from './Aux'


const WhitErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state={
            error:null
        }

        // using componentDidMount it's ok to handle errors in post but isn't ok for 
        // get method, because i get in mi didMount in another component and then this component
        // never mounted if that error apears. So i need to change this for componentWillMount

        UNSAFE_componentWillMount(){

            this.reqInterceptor = axios.interceptors.response.use(req =>{

                this.setState({error:null});
                return req;

            })

            // i'm adding an interceptor to catch errors globally
            this.resInterceptor = axios.interceptors.response.use(res => res, error =>{

                this.setState({error:error});

            });
        }

        // i have an issue with the Will mount because i mount this everytime in all components when i call this method errorHandler
        //  then i need to unmount that when this specific instance is not needed anymore.
        // For eject the interceptors i need to add a reference at the interceptors and then i can use eject method
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        erroConfirmHandler=() =>{
            this.setState({error:null});
        }

        render(){
            return(
                <Aux>
                <Modal 
                show={this.state.error}
                clicked={this.erroConfirmHandler}
                >
                    {this.state.error?this.state.error.message:null}
                </Modal>
                <WrappedComponent {...this.props} />
                </Aux>
                
            );
        }
    } 
}

export default WhitErrorHandler
