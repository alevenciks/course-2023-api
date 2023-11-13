import accountRequestBody from '../../data/user/create_account.json' assert { type: 'json' }
import { config } from '../../../config.js'
import { generateRandomEmail } from '../helpers.js'

export async function getCreateUserRequestBody() {
    accountRequestBody.name = config[global.env].username
    accountRequestBody.status = config[global.env].status
    accountRequestBody.gender = config[global.env].gender
    accountRequestBody.email = await generateRandomEmail()
    
    return accountRequestBody
}

export async function getUpdateUserRequestBody() {
    accountRequestBody.name = `${config[global.env].username}Updated`
    accountRequestBody.status = config[global.env].status
    accountRequestBody.gender = config[global.env].gender
    accountRequestBody.email = await generateRandomEmail()
    
    return accountRequestBody
}