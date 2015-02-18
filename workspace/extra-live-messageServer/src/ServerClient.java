import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;


public class ServerClient extends Thread {
	
	private Socket socket;
	private boolean running = false;
	private Server.OnMessageReceived listener;
	
	private PrintWriter out;
	private BufferedReader in;
	
	public ServerClient(Socket s, Server.OnMessageReceived listener) {
		socket = s;
		this.listener = listener;
	}
	
	public void sendMessage(String msg) {
		if (out != null) {
			out.println(msg);
		}
		else {
			System.out.println("** No output stream!");
		}
	}
	
	public void stop26() {
		running = false;
	}
	
	@Override
	public void run() {
		// Get streams
		InputStream inS;
		try {
			inS = socket.getInputStream();
			OutputStream outS = socket.getOutputStream();
			
			// Get ability to write to streams
			out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(outS)), true);
			in = new BufferedReader(new InputStreamReader(inS));
			
			// Input loop
			running = true;
			while(running) {
				String input = in.readLine();
				if (input != null) {
					listener.messageReceived(input);
				}
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
