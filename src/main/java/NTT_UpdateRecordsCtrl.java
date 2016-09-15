import java.net.URISyntaxException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.auraframework.system.Annotations.AuraEnabled;
import org.auraframework.system.Annotations.Controller;
import org.auraframework.system.Annotations.Key;
import org.h2.schema.Schema;

@Controller
public class NTT_UpdateRecordsCtrl {

	@AuraEnabled
	public static List<Account> getObjectList() throws SQLException, URISyntaxException {
		List<Account> accounts = new ArrayList<>();

		Statement statement = ConnectionManager.getConnection().createStatement();

		ResultSet result = statement.executeQuery("SELECT  sfid,name FROM salesforce.account");

		while (result.next()) {
			String name = result.getString("sfid");
			String type = result.getString("name");
			Account account = new Account(name, type);
			accounts.add(account);

		}
		return accounts;
	}

	@AuraEnabled
	public static Account getAccountObject(@Key("recordId") String recordId) throws SQLException, URISyntaxException {
		// List<Account> accounts = new ArrayList<>();
		Account account = null;
		Statement statement = ConnectionManager.getConnection().createStatement();

		ResultSet result = statement
				.executeQuery("SELECT name,type FROM salesforce.account WHERE sfid='" + recordId + "'");

		while (result.next()) {

			String name = result.getString("name");
			String type = result.getString("type");

			account = new Account(name, type);
			// accounts.add(account);

		}

		return account;
	}

}