var ctx = null;
var window = null;
var text = null;

function newLevel() {
	 
	 ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

	 ctx.runOnUiThread(new java.lang.Runnable()
	 {
			run : function() {
				 window = new android.widget.PopupWindow();
				 window.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				 window.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				 window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

				 var text = new android.widget.TextView(ctx); 
				 text.setText("Seu texto!");

				 var layout = new android.widget.RelativeLayout(ctx);
				 layout.addView(text);

				 window.setContentView(layout);

				 window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP |
															 android.view.Gravity.RIGHT, 0, 0);
			}
	 });
}
