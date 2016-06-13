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
                "<user_id>1700000002</user_id>" +
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
        case 10003802:
            data = "<agip>" +
                "<header>" +
                "<command_id>10003802</command_id>" +
                "<game_id>2161</game_id>" +
                "<gateway_id>361001</gateway_id>" +
                "</header>" +
                "<body>" + 
                "<data>" +
                "&lt;UN&gt;linekong" +
                "&lt;Token&gt;1234554321asdf" +
                "&lt;UserIP4&gt;2130706433" +
                "&lt;Port&gt;8888" +
                "&lt;MAC&gt;02eaff21aa20" +
                "&lt;ClientType&gt;1" +
                "&lt;UID&gt;121213" +
                "&lt;AdultState&gt;1" +
                "&lt;PW&gt;123456" +
                "</data>" +
                "</body>" +
                "</agip>"
            break;
        case 10003119:
            data = "<agip>" +
                "<header>" +
                "<command_id>10003119</command_id>" +
                "<game_id>2161</game_id>" +
                "<gateway_id>361001</gateway_id>" +
                "</header>" +
                "<body>" + 
                "<server_id>361001</server_id>" +
                "<user_id>1700000002</user_id>" +
                "<role_id>100001</role_id>" +
                "<level>1</level>" +
                "<gender>2</gender>" +
                "<occupation_id>1</occupation_id>" +
                "<corps_id>0</corps_id>" +
                "<community_id>0</community_id>" +
                "<client_port>8888</client_port>" +
                "<client_ip>2130706433</client_ip>" +
                "<client_type>1</client_type>" +
                "<client_mac>02eaff21aa20</client_mac>" +
                "</body>" +
                "</agip>"
            break;
        case 10003303:
            data = "<agip>" +
                "<header>" +
                "<command_id>10003303</command_id>" +
                "<game_id>2161</game_id>" +
                "<gateway_id>361001</gateway_id>" +
                "</header>" +
                "<body>" + 
                "<user_id>1700000002</user_id>" +
                "<role_id>100001</role_id>" +
                "<logout_flag>1</logout_flag>" +
                "<role_occupation>1</role_occupation>" +
                "<role_level>1</role_level>" +
                "<rating_id>361001</rating_id>" +
                "<money1>0</money1>" + 
                "<money2>0</money2>" +
                "<experience>100<experience>" +
                "</body>" +
                "</agip>"
            break;
        case 10003413:
            data = "<agip>" +
                "<header>" +
                "<command_id>10003413</command_id>" +
                "<game_id>2161</game_id>" +
                "<gateway_id>361001</gateway_id>" +
                "</header>" +
                "<body>" + 
                "<detail_id>1111</detail_id>" +
                "<user_id>1700000002</user_id>" +
                "<subject_id>5</subject_id>" +
                "<amount>1000</amount>" +
                "<charge_time>" + Math.round(Date.now()/1000) + "</charge_time>" +
                "<total_amount>1000</total_amount>" +
                "<balance>0</balance>" +
                "<attach_code>111</attach_code>" +
                "</body>" +
                "</agip>"
            break;
        case 10003411:
            data = "<agip>" +
                "<header>" +
                "<command_id>10003411</command_id>" +
                "<game_id>2161</game_id>" +
                "<gateway_id>361001</gateway_id>" +
                "</header>" +
                "<body>" + 
                "<user_id>1700000002</user_id>" +
                "<role_id>100001</role_id>" +
                "<rating_id>361001</rating_id>" +
                "</body>" +
                "</agip>"
            break;
        case 10003717:
            data = "<agip>" +
                "<header>" +
                "<command_id>10003717</command_id>" +
                "<game_id>2161</game_id>" +
                "<gateway_id>361001</gateway_id>" +
                "</header>" +
                "<body>" + 
                "<detail_id>111</detail_id>" +
                "<user_id>1700000002</user_id>" +
                "<role_id>100001</role_id>" +
                "<role_gender>2</role_gender>" +
                "<role_occupation>1</role_occupation>" +
                "<role_level>1</role_level>" +
                "<rating_id>111</rating_id>" +
                "<ib_code>111</ib_code>" +
                "<package_flag>1</package_flag>" +
                "<count>3</count>" +
                "<pay_time>"  + Math.round(Date.now()/1000) + "</pay_time>" +
                "<user_ip>2130706433</user_ip>" +
                "<price>200</price>" +
                "<discount_price>180</discount_price>" +
                "<subject_info_list>" +
                "<subject_info>" +
                "<subject_id>5</subject_id>" +
                "<sub_amount>180</sub_amount>" +
                "</subject_info>" +
                "</subject_info_list>" +
                "</body>" +
                "</agip>"
            break;
        default:
            break;
    }
    return data;
};

exports.Message = Message;
