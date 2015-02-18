import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;


public class Server extends Thread {

	private OnMessageReceived listener;
	
	private PrintWriter out;
	private BufferedReader in;
	
	private ArrayList<ServerClient> clients;
	
	public Server(OnMessageReceived listener) {
		this.listener = listener;
		clients = new ArrayList<ServerClient>();
	}
	
	public void sendMessageToClients(String msg) {
		for(ServerClient sc : clients) {
			sc.sendMessage(msg);
		}
	}
	
	@Override
	public void run() {
		
		try {
			
			System.out.println("Server started, waiting for connection");
			ServerSocket ss = new ServerSocket(4444);
				
			while(true) {
				Socket socket = ss.accept();

				System.out.println("Client connected! =)");
				ServerClient c = new ServerClient(socket, new OnMessageReceived(){

					@Override
					public void messageReceived(String msg) {
						listener.messageReceived(msg);
						sendMessageToClients(msg);
					}
				});
				clients.add(c);
				c.start();
			}
			
			// Connection to user established :)
			

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		// TODO make loop
	}

	public interface OnMessageReceived {
		public void messageReceived(String msg);
	}
	
}
