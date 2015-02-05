
public class Main {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		TCPClient.OnMessageReceived listener = new TCPClient.OnMessageReceived() {
			@Override
			public void messageReceived(String message) {
				System.out.println("MESSAGE RECEIVED: "+message);
			}
		};
		TCPClient client = new TCPClient(listener);
		client.run();

	}

}
