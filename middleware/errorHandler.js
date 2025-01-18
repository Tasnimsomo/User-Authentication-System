// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.name === 'ValidationError') {
        res.status(400).json({
            status: 'error',
            message: err.message
        });
    }

    if (err.name === 'JsonWebTokenError') {
        res.status(401).json({
            status: 'error',
            message: 'Invalid token'
        });
    }

    // default error
    res.status(500).json({
        status: 'error',
        message: err.message
    });
};

module.exports = errorHandler;

