# Copyright (c) 2025, himadwise and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Students(Document):
    def validate(self):
        frappe.msgprint("Please enter your students")
