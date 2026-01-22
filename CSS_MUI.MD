### Host - Shell

- Cài thư viện MUI vào project
- import MUI vào file cần sử dụng
- setting cache cho MUI và tạo theme ở host để dùng chung cho cả host và micro frontend
- chia sẻ các library này ở module federation

```
"@mui/material": {
      singleton: true,
      requiredVersion: false,
    },
    "@mui/icons-material": {
      singleton: true,
      requiredVersion: false,
    },
```

### Remote - Micro Frontend

- Cài thư viện MUI vào project
- import MUI vào file cần sử dụng
- chia sẻ các library này ở module federation

```
"@mui/material": {
      singleton: true,
      requiredVersion: false,
    },
    "@mui/system": {
      singleton: true,
      requiredVersion: false,
    },
    "@mui/icons-material": {
      singleton: true,
      requiredVersion: false,
    },

    "@emotion/react": {
      singleton: true,
      requiredVersion: false,
    },
```
