exports.success = (message, data, res) => {
    res.json({
        message,
        status: true,
        data
    }).end();
  };
  
  exports.failed = (message, errors, res) => {
    res.json({
        message,
        status: true,
        errors
    }).end();
  }