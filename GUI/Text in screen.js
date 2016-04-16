var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity().get();
var window = null;
var text = null;

ctx.runOnUiThread(new java.lang.Runnable()
{
		run : function() {
				window = new android.widget.PopupWindow();
				window.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				window.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);

				text = new android.widget.TextView(ctx);
				text.setText("Seu texto!");
				
				var layout = new android.widget.RelativeLayout(ctx);
				layout.setOrientation(RelativeLayout.VERTICAL);
				layout.addView(text);

				window.setContentView(text);

				window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER |
                              android.view.Gravity.RIGHT, 0, 0);
		}
});
