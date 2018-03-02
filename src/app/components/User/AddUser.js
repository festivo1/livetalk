import React from "react";
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {SnackbarContent,withStyles,IconButton} from "material-ui";
import CloseIcon from 'material-ui-icons/Close';
import {
    Grid,
} from 'material-ui';
import {
     RegularCard, Button, CustomInput, ItemGrid
} from 'components';
import { Field, reduxForm,reset } from 'redux-form';
import update from 'immutability-helper';
import {UserActionCreators} from 'actions';
import {snackbarContentStyle} from 'variables';
const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 character and more'
    }

    if( errors.password || values.verify_password!==values.password) {
        errors.verify_password = 'Password does not match'
    }

    if(!values.first_name){
        errors.first_name = 'Required'
    }
    if(!values.last_name){
        errors.last_name = 'Required'
    }

    if(!values.about){
        errors.about = 'Required'
    }

    return errors
}

class AddUser extends React.Component {

    handleSubmit(values){
        const json = update(values,{$unset: ['verify_password']});
        console.log(json);
        this.props.onSubmitUser(json);
    }

    handleClose = () => {
        this.props.onClose();
    }

    render(){
        const { handleSubmit,pristine, reset, submitting,classes,user } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                <Grid container>
                    <ItemGrid xs={12} sm={12} md={8}>
                        <RegularCard
                            cardTitle="Add New User"
                            cardSubtitle=""
                            content={
                                <div>
                                    {user.show ?
                                    <SnackbarContent
                                        classes={{root:classes.root + (user.type==="info" ? " " + classes.info:user.type==="success" ? " " + classes.success:user.type==="error" ? " " + classes.danger:"")}}
                                        message={
                                            user.message
                                        }
                                        action={[
                                            <IconButton
                                                key="close"
                                                aria-label="Close"
                                                color="inherit"
                                                onClick={this.handleClose}
                                            >
                                                <CloseIcon
                                                    className={classes.close + " "}
                                                />
                                            </IconButton>,
                                        ]}
                                    /> : ''}
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <Field
                                                id="first-name"
                                                name="first_name"
                                                component={CustomInput} formControlProps={{fullWidth: true}}
                                                labelText="First Name"  />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <Field
                                                id="last-name"
                                                name="last_name"
                                                component={CustomInput} formControlProps={{fullWidth: true}}
                                                labelText="Last Name"  />
                                        </ItemGrid>
                                    </Grid>

                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={5}>
                                            <Field
                                                name="email"
                                                component={CustomInput}
                                                labelText="Email"  formControlProps={{fullWidth: true}}  />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={3}>
                                            <Field
                                                id="password"
                                                name="password"
                                                component={CustomInput} inputProps ={{type:"password"}}
                                                labelText="Password" />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={4}>
                                            <Field
                                                id="verify-password"
                                                name="verify_password"
                                                component={CustomInput} formControlProps={{fullWidth: true}}
                                                inputProps ={{type:"password"}}
                                                labelText="Verify Password"/>
                                        </ItemGrid>
                                    </Grid>

                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={12}>

                                            <Field
                                                id="about"
                                                name="about"
                                                component={CustomInput} formControlProps={{fullWidth: true} }
                                                inputProps={{
                                                     multiline: true,
                                                     rows: 5
                                                }}
                                                labelText="About"  />
                                        </ItemGrid>
                                    </Grid>

                                </div>
                            }
                            footer={
                                <Button type="submit" color="primary" disabled={pristine || submitting}>Submit</Button>
                            }
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={2}>
                    </ItemGrid>
                    {/*<ItemGrid xs={12} sm={12} md={4}>
                        <ProfileCard
                            avatar={avatar}
                            subtitle="CEO / CO-FOUNDER"
                            title="Alec Thompson"
                            description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                            footer={
                                <Button color="primary" round>Follow</Button>
                            }
                        />
                    </ItemGrid>*/}
                </Grid>
            </form>
            </div>
        );
    }

}

AddUser.propTypes = {
    added:PropTypes.bool,
    onSubmitUser:PropTypes.func.isRequired
}
const mapStateToProps = (state) => (
    {
        user: state.user
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        onSubmitUser: (values) => dispatch(
            UserActionCreators.addUser(values)
        ),
        onClose: () => dispatch(
            UserActionCreators.close()
        )
    }
);
const afterSubmit = (result, dispatch) =>
    dispatch(reset('add-user-form'));

AddUser = reduxForm({
    form: 'add-user-form',
    onSubmitSuccess: afterSubmit,
    validate,
    initialValues: {
        email: '',
        password:'',
        verify_password:'',
        first_name: '',
        last_name:'',
        about:''
    },
})(AddUser);

AddUser = withStyles(snackbarContentStyle)(AddUser);

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
