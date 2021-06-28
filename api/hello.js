import 'module-alias/register'
import myFile from '~/assets/myFile'

export default function (req, res) {
    res.statusCode(200)
    res.json(myFile)
}