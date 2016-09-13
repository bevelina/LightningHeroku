import java.util.ArrayList;
import java.util.List;

class DataWrapper {
		public List<String> barLabels;
		public List<Integer> barData;
		
	

		public List<String> getBarLabels() {
			return barLabels;
		}

		public void setBarLabels(List<String> barLabels) {
			this.barLabels = barLabels;
		}

		public List<Integer> getBarData() {
			return barData;
		}

		public void setBarData(List<Integer> barData) {
			this.barData = barData;
		}

		public DataWrapper() {
			barLabels = new ArrayList<String>();
			barData = new ArrayList<Integer>();
		}
	}