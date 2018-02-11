import React from "react";
import {
    Grid,
} from 'material-ui';
import {
     RegularCard, Button, CustomInput, ItemGrid
} from 'components';
import { Field, reduxForm } from 'redux-form';
const required = value => (value == null ? 'Required' : undefined)
class AddUser extends React.Component {

    handleSubmit(event){
        event.preventDefault();
        console.log("Hello")
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <Grid container>
                    <ItemGrid xs={12} sm={12} md={8}>
                        <RegularCard
                            cardTitle="Add New User"
                            cardSubtitle=""
                            content={
                                <div>

                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={5}>
                                            <Field
                                                name="email"
                                                component={CustomInput}
                                                labelText="Email"  validate={required} formControlProps={{fullWidth: true}}  />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={3}>
                                            <Field
                                                id="password"
                                                name="password"
                                                component={CustomInput} inputProps ={{type:"password"}}
                                                labelText="Password" validate={required} />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={4}>
                                            <Field
                                                id="verify-password"
                                                name="verify_password"
                                                component={CustomInput} formControlProps={{fullWidth: true}}
                                                inputProps ={{type:"password"}}
                                                labelText="Verify Password" validate={required} />
                                        </ItemGrid>
                                    </Grid>
                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <Field
                                                id="first-name"
                                                name="first_name"
                                                component={CustomInput} formControlProps={{fullWidth: true}}
                                                labelText="First Name" validate={required} />
                                        </ItemGrid>
                                        <ItemGrid xs={12} sm={12} md={6}>
                                            <Field
                                                id="last-name"
                                                name="last_name"
                                                component={CustomInput} formControlProps={{fullWidth: true}}
                                                labelText="Last Name" validate={required} />
                                        </ItemGrid>
                                    </Grid>

                                    <Grid container>
                                        <ItemGrid xs={12} sm={12} md={12}>

                                            <Field
                                                id="about-me"
                                                name="about_me"
                                                component={CustomInput} formControlProps={{fullWidth: true} }
                                                inputProps={{
                                                     multiline: true,
                                                     rows: 5
                                                }}
                                                labelText="About" validate={required} />
                                        </ItemGrid>
                                    </Grid>

                                </div>
                            }
                            footer={
                                <Button type="submit" color="primary">Submit</Button>
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

export default reduxForm({
    form: 'add-user-form',
    initialValues: {
        email: '',
        password:'',
        verify_password:'',
        first_name: '',
        last_name:'',
        about_me:''
    },
})(AddUser);
