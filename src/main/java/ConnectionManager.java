import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class ConnectionManager {
	/*

	public static void main(String[] args) throws URISyntaxException, SQLException {
		System.out.println(ConnectionManager.getConnection());
	}
*/
	public static Connection getConnection() throws URISyntaxException, SQLException {
		String dbUri = "jdbc:postgresql://ec2-54-235-124-2.compute-1.amazonaws.com:5432/ddqor59u32pcrr?user=shddyoqdkuvjmv&password=sJ_SLWNZhasPf8bBvAFVJ3nGso&&ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory";
		try {
			Class.forName("org.postgresql.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		Connection conn = null;
		try {
			conn = DriverManager.getConnection(dbUri);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		if (conn != null) {
			return conn;
		} else
			return null;
	}
}
