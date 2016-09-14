<%@ page import="org.auraframework.*,java.nio.file.Paths,java.nio.file.Path,org.auraframework.impl.source.file.FileSourceListener,org.auraframework.util.FileChangeEvent" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script src="http://canvasjs.com/assets/script/canvasjs.min.js"></script>
<script type="text/javascript">


function calcHeight()
{
  //find the height of the internal page
  var the_height=
    document.getElementById('the_iframe').contentWindow.
      document.body.scrollHeight;

  //change the height of the iframe
  document.getElementById('the_iframe').height=
      the_height;
}
</script>
</head>
<title> Aura OSS</title>
</head>
<body>
<!--
loading..
 <%
  //Point path to main component 
  Path p = Paths.get("/Users/rraodv/docker-stuff/tictactoe/src/main/webapp/WEB-INF/components/");

  //create a FileSourceListener file listner
  FileSourceListener listener = new FileSourceListener();

  //pass a dummy file changed event.. Profit! 
  listener.fileChanged(new FileChangeEvent(p));
%>
-->
<!-- load the app in a fullscreen iframe instead of redirecting it -->

<iframe src="/ttt/NTT_UpdateRecordsApp.app" scrolling="no" style=" top:0px; left:0px; bottom:0px; right:0px; width:700; height:500; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>


<div id="chartContainer" style="height: 300px; width: 100%;"></div>

</body>
</html>