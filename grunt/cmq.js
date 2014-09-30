module.exports = {
    options: {
        log: false
    },
    your_target: {
        files: {
            "<%= config.cssDir %>": ['<%= config.cssDir %>/*.css']
        }
    }
};