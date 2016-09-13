import java.io.IOException;

import org.auraframework.util.json.Json;
import org.auraframework.util.json.JsonSerializable;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;

@DatabaseTable(tableName = "account")
public class Account implements JsonSerializable {

	@DatabaseField(generatedId = true)
	private long id;

	@DatabaseField
	private String Name;

	@DatabaseField
	private String Type;

	public Account(String Name, String Type) {
		this.Name = Name;
		this.Type = Type;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getType() {
		return Type;
	}

	public void setType(String type) {
		Type = type;
	}

	@Override
	public String toString() {
		return this.Name + " " + this.Type;

	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Override
	public void serialize(Json json) throws IOException {

		json.writeMapBegin();
		json.writeMapEntry("id", getId());
		json.writeMapEntry("name", getName());
		json.writeMapEntry("type", getType());
		json.writeMapEnd();

	}

}