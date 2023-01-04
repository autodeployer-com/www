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

function newsletter() {
  //message.value="NEWSLETTER"
  name.value = "DIALOGWARE-ian"
  message.value = "Thank You  for a registration on DIALOGWARE NEWSLETTER."
  //message.value = "Thank You " + name.value + " for a registration on DIALOGWARE NEWSLETTER."
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

    var API_URL = `https://email.dialogware.com/?type=NEWSLETTER&name=${name.value}&message=${message.value}&email=${email.value}`
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

  <div class="newsletter">

    <form method="get" class="email_form" id="email_form" v-if="email_form" action="#" onsubmit="return false;">

      <div>
        <fieldset>
          <input v-model="email" placeholder="@"/>
        </fieldset>
      </div>


      <div v-if="email_form">
        <fieldset class="button_send">
          <button @click="newsletter">Subscribe</button>
        </fieldset>
      </div>

    </form>


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

.newsletter {
  display: flex;
  justify-content: left;

}

.email_form {
  display: flex;
  align-items: center;
  justify-content: left;
}

.email_form input {
  padding: 4px;
  margin: 4px;
}


.email_form input,
.tip,
.warning {
  height: 40px;
}

.email_form input,
.tip,
.warning {
  width: 250px;

  font-size: 25px;
}

fieldset {
  border: 0px solid white;
}

button {
  font-size: 30px;
  font-weight: bold;
  color: rgb(66, 184, 131);
  background-color: black;
  padding: 4px;
  height: 40px;
  border: 1px solid yellowgreen;
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
