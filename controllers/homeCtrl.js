const get = (req, res) =>{
    res.status(200);
    res.send('Products API');
};

const health = (req, res) =>{
    res.status(200);
    res.json({status : 'UP'});
};

module.exports = {
    get,
    health
};