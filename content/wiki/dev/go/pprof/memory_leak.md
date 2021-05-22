---
sidebar: auto
---

# Memory Leaking Scenarios 

## 

```
import "github.com/DeanThompson/ginpprof"

	ginpprof.Wrapper(router)
```


## Case Sets

Case1: https://github.com/golang/go/issues/25484

yes, the way used by strings.Builder, is a more efficient way.

```
func ByteSlice2String(bs []byte) string {
	return *(*string)(unsafe.Pointer(&bs))
}
```

For reference, [this is the source referred to](https://golang.org/src/strings/builder.go#L45)

https://www.openmymind.net/Go-Slices-And-The-Case-Of-The-Missing-Memory/
