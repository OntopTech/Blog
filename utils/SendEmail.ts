import axios from 'axios'
import { useState } from 'react'

export const SendBludBird = async (email: string) => {
  const mail = {
    Email: email,
  }
  const data = await axios.post('http://localhost:5000/form-example', mail)
  console.log(data)
}
