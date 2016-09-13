import java.sql.SQLException;
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

import org.json.*;
import java.util.*;

@Controller
public class NTT_BarChartController {

	@AuraEnabled
	public static String getAccountJSON() throws SQLException, JsonProcessingException {

		Dao<Account, Long> accountDao = DaoManager.createDao(NTT_DataStore.getInstance().getConnectionSource(),
				Account.class);
		List<Account> accounts = accountDao.queryForAll();
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

		return mapper.writeValueAsString(barData);

	}

}