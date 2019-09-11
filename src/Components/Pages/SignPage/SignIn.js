import React, { Component } from 'react'
import './SignIn.css';
import { thisExpression } from '@babel/types';

export default class SignIn extends Component {
    render() {
        return (
            <div className="signin_container">
                <div className="signin_card_container">                    
                    <CustomTab/>
                </div>
            </div>
        )
    }
}

class CustomTab extends Component{

    constructor(props){
        super(props);
        this.state={
            login_display: true,
        }
    }
    
    tab1 = (e)=>{
        console.log('signup is clicked ::');
        this.setState({login_display:false});
        console.log('the state set is  :',this.state.login_display);
    }
    tab2 = (e)=>{
        console.log('signin is clicked ::');
        this.setState({login_display:true,});
        console.log('the state set is  :',this.state.login_display);
        
    }


    handleGoogleClick=()=>{
        alert('google log in');
    }

    handleFacebookClick = ()=>{
        alert('facebook login is clicked...');
    }


    //sign up sub page
    signUp = ()=>{
        return <div className="signup_form_container">
            <h1>Create your student account</h1>
            <h3>Build skills for today, tomorrow, and beyond.</h3>
            <h3>Education to future-proof your career.</h3>

            <div className="social_network_login">
                <facebookButton></facebookButton>
                <googleButton></googleButton>
                <div className="google_button_container" onClick={this.handleGoogleClick}>
                    googleButton
                </div>
                
            <div className="facebook_button_container" onClick={this.handleFacebookClick}>
                facebookButton
            </div>
            </div>

            <div className="or_seprator_container">
            
                <div className="or_line_container"><hr className="or_seprator_line"></hr></div>
                <div className="or_seprator_text">or</div>
                <div className="or_line_container"><hr className="or_seprator_line"></hr></div>
            </div>

            <div className="form_container">
                

            </div>

        </div>
    }

    //sign in sub page
    signIn = ()=>{

        return <div className="">
                    <h1>Sign in to your account</h1>
                    <h3>Build skills for today, tomorrow, and beyond.</h3>
                    <h3>Education to future-proof your career.</h3>
        </div>;
    }

    render(){
        const condition = this.state.login_display;
        return(
            <div>
                <ul className="sign_in_tabs">
                    <li className="tab1" onClick={this.tab1}>
                        Sign Up
                    </li>
                    <li className="tab2" onClick={this.tab2}>
                        Sign IN
                    </li>
                </ul>
                <div>
                    {
                        condition ? <this.signIn></this.signIn>
                        :<this.signUp></this.signUp>
                    }
             </div>
            </div>
        );
    }
}




class googleButton extends Component{
    render(){
        return(
            <div className="google_button_container">
                googleButton
            </div>
        );
    }
}


class facebookButton extends Component{
    render(){
        return(
            <div className="facebook_button_container">
                facebookButton
            </div>
        );
    }
}


// class Tabs extends Component{
//     render(){
//         return(
//             <div>
//                 <ul className="inline">
//                     {this.props.children.map((elem,index)=>{
//                     let style = index == this.state.selected ? 'selected': '';
//                     return <li className={style} key={index} onClick={this.handleChange.bind(this,index)}>{elem.props.title}</li>
//                     })}
//                 </ul>
//                 <div className="tab">{this.props.children[this.state.selected]}</div>
//           </div>
            
//         );
//     }
//     handleChange(index){
//         this.setState({selected:index})
//       }
// }
