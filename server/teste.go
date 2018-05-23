package main
import (
	"fmt"
	"crypto/sha256"
)

const secret = "julianalinda"

func main() {
	admin := sha256.Sum256([]byte("admin" + secret))
	//funcionario := sha256.Sum256([]byte("funcionario" + secret))
	var a string
	a = fmt.Sprintf("%x", admin)
	fmt.Println(a)
}