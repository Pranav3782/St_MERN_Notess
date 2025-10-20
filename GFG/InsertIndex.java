import java.util.*;

class InsertIndex {
    public void insertAtIndex(ArrayList<Integer> arr, int index, int val) {
        while (arr.size() < index) {
            arr.add(0);  
        }

        
        if (arr.size() == index) {
            
            arr.add(val);
        } else {
            
            arr.add(index, val);
        }
    }
}
