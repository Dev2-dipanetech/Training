import frappe

@frappe.whitelist()
def fetch_child(si):
    query =f""" SELECT  item_code, qty
                FROM `tabSales Invoice Item`
                WHERE parent = '{si}'"""
    
    return frappe.db.sql(query, as_dict=1)
