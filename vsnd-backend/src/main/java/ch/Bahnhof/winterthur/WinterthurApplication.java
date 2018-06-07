package ch.Bahnhof.winterthur;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@RequestMapping("/")
public class WinterthurApplication {

	@GetMapping
	public ResponseEntity<?> actionFullPersonName() {
		return ResponseEntity.ok("Hello Docker World...");
	}

	public static void main(String[] args) {
		SpringApplication.run(WinterthurApplication.class, args);
	}
}
