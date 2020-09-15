const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('falseAns',{
        title: 'Неверное имя пользовател',
    });
});

module.exports = router;