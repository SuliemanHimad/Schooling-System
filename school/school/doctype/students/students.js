// Copyright (c) 2025, himadwise and contributors
// For license information, please see license.txt

frappe.ui.form.on("Students", {
    /*onload: function (frm) {

    // },*/
	// refresh(frm) {
    //     frm.set_intro("Please,Finish your Registration Form");
	// },
    // validate:function(frm) {
    //     frm.set_value("full_name", frm.doc.first_name +" "+ frm.doc.middle_name+" "+ frm.doc.last_name);
    //     frm.set_value("full_name", frm.doc.first_name +" "+ frm.doc.middle_name+" "+ frm.doc.last_name);
       

    // },



   /* after_save:function(frm) {
        frappe.msgprint("Th full Name From the doctype: "+ frm.doc.full_name);
        const full_name = frm.doc.first_name +" "+ frm.doc.middle_name+" "+ frm.doc.last_name;
        frappe.msgprint("Full Name From Assigning to a variable: "+ full_name);
        for(let row of frm.doc.family_members){
            frappe.msgprint(__("{0}. The Family Member Name is: '{1}' and Relationship Name is: '{2}'",[row.idx,row.full_name, row.relation]))
        }
    },*/



    // before_save: function(frm){
    //     frappe.msgprint("Your subjects are : "+ frm.doc.subjects)
       
    // },
    // after_save: function(frm){
        
    // },
    // enable: function(frm){
    //     frappe.msgprint("Enable is triggered")
    // },
    // age:function(frm){
    //     if(frm.doc.age < 18){
    //         frm.set_value("is_minor", true);
    //     }else{
    //         frm.set_value("is_minor", false);
    //     }
    // },
    // subjects: function(frm){
    //     // check if the subject exists or greater than 12 or less than 1
    //     frappe.msgprint(frm.doc.subjects);
    // },
    /*family_members_on_form_rendered: function(frm){
        // loop through frm.doc.family_members
        for(let row of frm.doc.family_members){
            frappe.msgprint(__("{0}. The Family Member Name is: '{1}' and Relationship Name is: '{2}'",[row.idx,row.full_name, row.relation]))
        } 
    },*/

    // before_submit: function(frm){
    //     frappe.msgprint("Before Submit is triggered")
    //     frappe.msgprint("{0}. Is Minor Request",frm.doc.is_minor);
    //     if(!frm.doc.full_name){
    //         throw new Error("Full Name is required");
    //     }else{
    //         frappe.msgprint("Full Name is: "+ frm.doc.full_name)
    //     }
    // },
    // on_submit:function(frm){
    //     frappe.msgprint("On Submit is triggered")
    // },
    // before_cancel:function(frm){
    //     frappe.msgprint("Before Cancel is triggered")
    // },
    // after_cancel:function(frm){
    //     frappe.msgprint("After Cancel is triggered")
    // }
    onload:function(frm){
        frm.set_query("paid_by", function(){
            return {
                "filters": {
                    "ignore_user_type":1
                }
            }
        })
    }
});
