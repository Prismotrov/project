const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('trueAns',{
        title: 'Верное имя пользователя',
    });
});


module.exports = router;    