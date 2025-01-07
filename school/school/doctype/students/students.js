// Copyright (c) 2025, himadwise and contributors
// For license information, please see license.txt

frappe.ui.form.on("Students", {
	refresh(frm) {
        frappe.msgprint("Welcome to the Registration of Students");
         // automatically fill sn field with aut generated number
         frm.set_value("sn", frappe.datetime.now_datetime().replace(" ", "_").replace(":", "_"));

	},
    validate:function(frm) {
          // Check if the date is in any active fiscal year
          var date = "2025-01-07"; // Replace with the actual date you want to validate
          var fiscal_years = frm.doc.fiscal_years || [];
          var is_in_active_fiscal_year = fiscal_years.some(function(fiscal_year) {
              var start_date = frappe.datetime.str_to_obj(fiscal_year.year_start);
              var end_date = frappe.datetime.str_to_obj(fiscal_year.year_end);
              return frappe.datetime.is_date_between(date, start_date, end_date);
          });
  
          if (!is_in_active_fiscal_year) {
              // Hide the message by throwing an empty string
              frappe.throw("");
          }


        // validate subjects greater than 0 and less than or equal to 12
        if(frm.doc.subjects.length > 12 || frm.doc.subjects.length < 0){
            frappe.throw("Number of subjects should be between 0 and 12");
        }
       
        // automatically fill full_name field with concatenation of first_name, middle_name and last_name
        
        frm.set_value("full_name", frm.doc.first_name +" "+ frm.doc.middle_name+" "+ frm.doc.last_name);
        frm.set_value("full_name", frm.doc.first_name +" "+ frm.doc.middle_name+" "+ frm.doc.last_name);
    },
    after_save:function(frm) {
        frappe.msgprint(frm.doc.full_name);
    }
});
