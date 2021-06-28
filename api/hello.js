import 'module-alias/register'
import myFile from '~/assets/utils/myFile'

export default function (req, res) {
    res.statusCode(200)
    res.json(myFile)
}