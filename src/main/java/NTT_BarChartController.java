import java.net.URISyntaxException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.management.Query;

import org.auraframework.system.Annotations.AuraEnabled;
import org.auraframework.system.Annotations.Controller;
import org.auraframework.system.Annotations.Key;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import com.j256.ormlite.dao.Dao;
import com.j256.ormlite.dao.DaoManager;
import com.j256.ormlite.dao.GenericRawResults;
import com.j256.ormlite.stmt.PreparedQuery;

import java.util.*;

@Controller
public class NTT_BarChartController {

	@AuraEnabled
	public static String getAccountJSON() throws SQLException, JsonProcessingException, URISyntaxException {

		List<Account> accounts = new ArrayList<>();

		Statement statement = ConnectionManager.getConnection().createStatement();

		ResultSet result = statement.executeQuery("SELECT  name, type FROM salesforce.account");

		while (result.next()) {
			String name = result.getString("name");
			String type = result.getString("type");
			Account account = new Account(name, type);
			accounts.add(account);

		}

		System.out.println("the accounts are" + accounts);
		Map<String, Integer> mapType = new HashMap<String, Integer>();

		for (Account a : accounts) {
			if (mapType.containsKey(a.getType())) {
				mapType.put(a.getType(), mapType.get(a.getType()) + 1);
			} else {
				mapType.put(a.getType(), 1);
			}
		}
		ObjectMapper mapper = new ObjectMapper();
		DataWrapper barData = new DataWrapper();

		for (String key : mapType.keySet()) {
			barData.barLabels.add(key);
			barData.barData.add(mapType.get(key));
		}

		// return mapper.writeValueAsString(barData);
		return mapper.writeValueAsString(barData);

	}

}