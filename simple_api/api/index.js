const router = require('express').Router();
const mocks = require('./mock');
const assign = require('object-assign');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
router.get('/todo/', function (req, res, next) {
    const todos = mocks.todos.map(function (todo) {
            return assign({}, todo, {
                text: undefined
            })
        }),
        limit = Number(req.query.limit) || todos.length,
        offset = Number(req.query.offset) || 0;

    res.json(todos.slice(offset, limit + offset))
});

router.get('/todo/:id', function (req, res, next) {
    const todos = mocks.todos.filter(function (todo) {
        return todo.id == req.params.id
    })[0];
    if (todos) return res.json(todo);

    res.status(404).json({error: "not found"});
});

router.post('/todo/', urlencodedParser, function (req, res, next) {
    const body = req.body;
    
    const existedTodo = mocks.todos.filter(todo => todo.id === body.id).length;
    
    if (existedTodo) {
        const idx = mocks.todos.findIndex(item => item.id === body.id);
        mocks.todos[idx] = body;
        res.json(mocks.todos[idx]);
        return;
    }
    const todo = {
        id: Date.now().toString(),
        title: body.title,
        desc: body.desc,
        project: body.project,
        priority: body.priority,
        date: new Date()
    };
    mocks.todos.push(todo);
    res.json(todo)
});

router.delete('/todo/', function (req, res, next) {
    const body = req.body;
    const idx = mocks.todos.findIndex(item => item.id === body.id);
    mocks.todos.splice(idx, 1);
    res.json(mocks.todos);
});

router.post('/report', function (req, res) {
    res.json({})
})

module.exports = router;
