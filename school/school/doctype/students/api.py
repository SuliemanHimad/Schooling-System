
import frappe
from frappe import _

@frappe.whitelist()
def create_student(sn, full_name, grade, subjects, address):
    """
    Create a new student record.
    """
    student = frappe.get_doc({
        "doctype": "Students",
        "sn": sn,
        "full_name": full_name,
        "grade": grade,
        "subjects": subjects,
        "address": address
    })
    student.insert()
    frappe.db.commit()
    return {"message": _("Student created successfully."), "student_id": student.name}

@frappe.whitelist()
def get_student(student_id):
    """
    Retrieve a student record by ID.
    """
    student = frappe.get_doc("Students", student_id)
    return student.as_dict()

@frappe.whitelist()
def get_all_students():
    """
    Retrieve all student records.
    """
    students = frappe.get_all("Students", fields=["name", "sn", "full_name", "grade", "subjects", "address"])
    return students

@frappe.whitelist()
def update_student(student_id, **kwargs):
    """
    Update a student record.
    """
    student = frappe.get_doc("Students", student_id)
    for key, value in kwargs.items():
        if key in ["sn", "full_name", "grade", "subjects", "address"]:
            setattr(student, key, value)
    student.save()
    frappe.db.commit()
    return {"message": _("Student updated successfully."), "student_id": student_id}

@frappe.whitelist()
def delete_student(student_id):
    """
    Delete a student record.
    """
    frappe.delete_doc("Students", student_id)
    frappe.db.commit()
    return {"message": _("Student deleted successfully.")}
