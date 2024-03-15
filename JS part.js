frappe.ui.form.on('Test_js', {
	sales_invoice_no: function(frm){
	    let si = frm.doc.sales_invoice_no
	    if (si){
	        frappe.call({
	            method:"dt_mcs_custom_hr_module.methods.fetch_test.fetch_child",
	            args: {'si': si}
	        }).done((r)=> {
	           // console.log(r)
	           frm.items = []
	           $.each(r.message, function(_i, e){
	               let si_table = frm.add_child('items')
	               si_table.item_code = e.item_code
	               si_table.qty = e.qty
	           })
	           refresh_field('items')
	        })
	    }
	}
});
