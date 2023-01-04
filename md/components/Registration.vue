<script setup>

import {ref} from 'vue'

const message = ref("")
const email = ref("")
const text = ref("")
const name = ref("")

const warning_message = ref(false)
const error_message = ref(false)
const info_message = ref(false)
const email_form = ref(true)

function registration() {
  //message.value="REGISTRATION"
  message.value = "Thank You " + name.value + " for a registration on DIALOGWARE."
  error_message.value = false
  warning_message.value = false
  if (
      (name.value.length < 2) ||
      (email.value.length < 4) ||
      (message.value.length < 4)
  ) {
    warning_message.value = true
  } else {
    warning_message.value = false

    var API_URL = `https://email.dialogware.com/?type=REGISTRATION&name=${name.value}&message=${message.value}&email=${email.value}`
    fetch(
        API_URL,
        {
          method: 'get',
        }
    ).then(response => response.json())
        .then(data => {
          email.value = data.email
          text.value = data.text
          name.value = data.name

          if (data.found > 5) {
            error_message.value = true
          } else {
            error_message.value = false
            warning_message.value = false
            email_form.value = false
            info_message.value = true
          }
        });
  }
}
</script>


<template>

  <div class="registration">

    <form method="get" class="email_form" id="email_form" v-if="email_form">

      <div>
        <fieldset>
          <label>
            <div>Name:</div>
            <input v-model="name" placeholder="name">
          </label>
        </fieldset>


        <fieldset>
          <label>
            <div>E-mail:</div>
            <input v-model="email" placeholder="@"/>
          </label>
        </fieldset>

      </div>
    </form>

    <div v-if="email_form">
      <fieldset class="button_send">
        <p>
          <button @click="registration">REGISTRATION</button>
        </p>
      </fieldset>
    </div>


    <div class="tip custom-block info_message" v-if="info_message">
      <p class="custom-block-title">Info</p>
      <p>We got your Email! What can be the next step? Join us on <a
          href="https://www.linkedin.com/showcase/dialogware/">linkedin</a></p>
    </div>

    <div class="warning custom-block warning_message" v-if="warning_message">
      <p class="custom-block-title">Error</p>
      <p>Please fill the fields with min. 6 characters</p>
    </div>

    <div class="warning custom-block error_message" v-if="error_message">
      <p class="custom-block-title">Error</p>
      <p>Sending message is not possible, contact me please on <a href="https://www.linkedin.com/in/tom-sapletta-com">linkedin</a>
      </p>
    </div>

  </div>

</template>


<style scoped>

.registration {
  align-items: center;
  justify-content: center;
}

.email_form {
  display: flex;
  align-items: center;
  justify-content: left;
}

.email_form input,
.email_form textarea,
.button_send,
button,
.tip,
.warning {
  width: 300px;
}

fieldset {
  border: 0px solid white;
}

button {
  font-weight: bold;
  color: gray;
  background-color: black;
  padding: 5px;
  border: 1px solid white;
}

input, textarea {
  color: white;
  background-color: black;
  padding: 1px;
  border: 1px solid white;
}

label div {
  white-space: pre-line;
  color: gray;
  padding: 0px;
}
</style>
