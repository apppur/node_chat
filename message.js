'use strict';

var Message = function() {
};

Message.prototype.createMessage = function (id) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    var data;
    switch (id) {
        case 10002003:
            data = "<agip>" +
                "<header>" +
                "<command_id>10002003</command_id>" +
                "<game_id>2161</game_id>" +
                "<gateway_id>361001</gateway_id>" +
                "</header>" +
                "<body>" +
                "<server_id>2161</server_id>" +
                "<data_info_list>" +
                "<data_info>" +
                "<data_value>11</data_value>" +
                "<data_type>1</data_type>" +
                "</data_info>" +
                "<data_info>" +
                "<data_value>3</data_value>" +
                "<data_type>8</data_type>" +
                "</data_inof>" + 
                "</data_info_list>" +
                "</body>" +
                "</agip>";
            break;
        case 10003102:
            data = "<agip>" +
                "<header>" +
                "<command_id>10003102</command_id>" +
                "<game_id>2161</game_id>" +
                "<gateway_id>361001</gateway_id>" +
                "</header>" +
                "<body>" + 
                "<user_id>110110110</user_id>" +
                "<role_name>applepurple</role_name>" +
                "<role_gender>2</role_gender>" +
                "<role_occupation>1</role_occupation>" +
                "<initial_level>1</initial_level>" +
                "<user_ip>2130706433</user_ip>" +
                "<user_port>8888</user_port>" +
                "<community_id>0</community_id>" +
                "</body>" +
                "</agip>"
            break;
    }
    return data;
};

exports.Message = Message;
