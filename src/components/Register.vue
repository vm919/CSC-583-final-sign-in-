<template>
    <section class="bg-light">
        <div id="contact-form" class="contact-form">
            <label class="col-lg-12"><b>Enter Your details </b></label>
            <br/>
            <br/>
         <form class="form col-md-12" @submit="onSubmit">
             <span>
                 <label class="col-lg-3">Name : </label>
                 <input class="col-lg-8" required name="name" v-model='user.name' placeholder="Name" type="text" autocomplete="off">
             </span>
             <span>
                 <label class="col-lg-3">Email : </label>
                 <input class="col-lg-8" required name="email" v-model="user.email" placeholder="E-mail" type="email" autocomplete="off">
             </span>
             <span>
                 <label class="col-lg-3">Phone : </label>
                 <input class="col-lg-8" required name="phone" v-model='user.phone' placeholder="Phone" type="phone" pattern="^[1-9][0-9]{9}" title="enter valid 10 digit phone number" autocomplete="off">
             </span>
             <span>
                 <label class="col-lg-3">Company : </label>
                 <input class="col-lg-8" required name="company" v-model="user.company" placeholder="Company" type="text" autocomplete="off">
             </span>
             <div>
                 <input type="checkbox" id="officialVisit" v-model="user.officialVisit">
                 <label for="officialVisit"> Official Visit </label>
             <div>

             </div>
                 <input type="checkbox" id="escortRequired" v-model="user.escortRequired">
                 <label for="escortRequired"> Escort Required </label>
             </div>
             <span v-if="user.escortRequired">
                 <label class="col-lg-3">Phone : </label>
                 <input class="col-lg-8" v-bind:required='user.escortRequired' name="escortName" v-model="user.escortName" placeholder="Escort Name" type="text" autocomplete="off">
             </span>
             <br></br>
             <span>
                 <div class="col-lg3"></div>
                <button id="send" :disabled="btnDisabled" class="col-lg-6 button btn">Register</button>
             </span>
         </form>

    </div>
    </section>
</template>

<script>
    export default {
        name: 'Register',
        data () {
            return {
                user: {
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    officialVisit : false,
                    escortRequired : false,
                    escortName : ''
                },
                toast: false,
                toastMessage : 'Registering...',
                btnDisabled : false
            }
        },
        methods: {
            clearForm : function() {
                for (let field in this.user) {
                    this.user[field] = ''
                }
            },
            onSubmit : function(evt) {
                evt.preventDefault();
                this.toast = true;
                this.btnDisabled = true;
                this.toastMessage = 'Registering User...';

                var form = new FormData();
                for (var field in this.user) {
                    form.set(field, this.user[field]);
                }

                var config = {
                    headers : {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin' : 'http://localhost:3000'
                    }
                }

                this.$http.post('http://localhost:4000/register', this.user, config).then((response) => {
                    this.toastMessage = "Success";
                    alert(this.toastMessage);

                        this.toast = false;
                        this.clearForm();
                        this.btnDisabled = false;

                }).catch((e) => {
                    this.toastMessage = "Failed";
                    alert(this.toastMessage);
                        this.toast = false;
                        this.btnDisabled = false;


                });
            }
        }
    }
</script>


<style scoped>
    #limheight li {
        text-align: left;
    }

    .limheight {
        text-align: left;
    }

    .contact-form {
        font-family: "Al Bayan";
        margin: 0 auto;
        max-width: 600px;
        width: 100%;
    }

    .contact-form .separator {
        border-bottom: solid 1px #ccc;
        margin-bottom: 15px;
    }

    .contact-form .form {
        display: flex;
        flex-direction: column;
        font-size: 16px;
    }

    .contact-form_title {
        color: #333;
        text-align: left;
        font-size: 28px;
    }

    .contact-form input[type="email"],
    .contact-form input[type="text"],
    .contact-form input[type="phone"],
    .contact-form textarea {
        border: solid 1px #e8e8e8;
        font-family: 'Roboto', sans-serif;
        padding: 10px 7px;
        margin-bottom: 15px;
        outline: none;
    }

    .contact-form textarea {
        resize: none;
    }

    .contact-form .button {
        background: #da1b15;
        border: solid 1px #da1b15;
        color: white;
        cursor: pointer;
        padding: 10px 50px;
        text-align: center;
        text-transform: uppercase;
    }

    .contact-form .button:hover {
        background: #da1b15;
        border: solid 1px #da1b15;
    }

    .contact-form input[type="email"],
    .contact-form input[type="text"],
    .contact-form input[type="phone"],
    .contact-form textarea,
    .contact-form .button {
        font-size: 15px;
        border-radius: 3px
    }

    #snackbar {
        min-width: 250px;
        margin-left: -125px;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 2px;
        padding: 16px;
        position: fixed;
        z-index: 1;
        left: 50%;
        bottom: 50%;
        font-size: 17px;
    }



    @-webkit-keyframes fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 30px; opacity: 1;}
    }

    @keyframes fadein {
        from {bottom: 0; opacity: 0;}
        to {bottom: 30px; opacity: 1;}
    }

    @-webkit-keyframes fadeout {
        from {bottom: 30px; opacity: 1;}
        to {bottom: 0; opacity: 0;}
    }

    @keyframes fadeout {
        from {bottom: 30px; opacity: 1;}
        to {bottom: 0; opacity: 0;}
    }
</style>

