
## Tech Stack

**Client App:** Typescript, Electronjs, Vue, Vuex, ..

**Server:** Node, Express

## Run Locally 🏃

Clone the project

```bash
#clone repo, cd vào repo, npm install rồi npm start 
  git clone ...
  cd ...
  npm install 
  npm start
```

## 🏗️ **Cấu trúc dự án**

### **1. root **
```
📁 FLB-Music-Player/
├── 📁 src/
│   ├── 📁 main/           # Backend Logic (Node.js)
│   ├── 📁 renderer/       # Frontend UI (Vue.js)
│   ├── 📁 shared-utils/   # Utilities dùng chung
│   ├── 📁 types/          # TypeScript type definitions
│   └── background.ts      # Main Electron process
├── 📁 public/             # Static assets
├── 📁 icons/              # App icons
└── 📁 dist_electron/      # Built app
```

### **2. Backend (Main Process)**

- **📁 `src/main/modules/`**: Các module quản lý core logic
  - `FilesTracker.ts`: Theo dõi và quản lý file nhạc
  - `PlaylistTracker.ts`: Quản lý playlist
  - `PlaybackStats.ts`: Thống kê phát nhạc
  - `Settings.ts`: Cài đặt ứng dụng
  - `Paths.ts`: Quản lý đường dẫn thư mục

### **3. Frontend (Renderer Process)**
- **📁 `src/renderer/components/`**: Vue components
  - `base-components/`: Components cơ bản
  - `local-music/`: Components cho nhạc local
  - `root/`: Components gốc (navbar, settings, equalizer...)

- **📁 `src/renderer/views/`**: Các trang chính
  - `local-music/`: Trang nhạc local với các tab
  - `discover`: Trang tìm kiếm và tải nhạc -> tìm hiểu rồi làm thử cái này xem nha

## 🌐 **Nguồn dữ liệu và API**

### **1. Nhạc Local**
- Quét thư mục nhạc trên máy tính
- Hỗ trợ các format: MP3, FLAC, WAV, M4A, OGG
- Đọc metadata từ file (title, artist, album, artwork...)

### **2. API tải nhạc (ytdl.ts)**
```typescript
// dùng API 9convert.com để tải nhạc từ YouTube
async function getDownloadLink(ytLink: string, quality = '128kbs')
```
- **Nguồn**: YouTube qua API 9convert.com
- **Chất lượng**: 64kbs đến 320kbs
- **Process**: Link YouTube → API 9convert → Link download trực tiếp

### **3. API tìm kiếm nhạc**
- **Deezer API**: Tìm kiếm nhạc, album, artist
- **YouTube API**: Tìm kiếm video/nhạc
- **Lyrics API**: Tìm lời bài hát từ Genius

### **4. API hình ảnh**
- **Artist Images**: Tự động tải ảnh nghệ sĩ
- **Album Art**: Lấy artwork từ metadata hoặc download

## ⭐ **Tính năng chính**

### **1. Quản lý nhạc Local** 
- 📂 **Quét thư mục**: Tự động scan folder nhạc
- 🎵 **Phân loại**: Theo Artist, Album, Folder, Playlist
- 🔍 **Tìm kiếm**: Search trong thư viện cá nhân
- 🏷️ **Tag Editor**: Chỉnh sửa metadata (title, artist, genre...)

### **2. Phát nhạc**
- ▶️ **Playback**: Play/pause/skip với các mode repeat, shuffle
- 🎚️ **Equalizer**: Điều chỉnh âm thanh với nhiều preset
- 🔊 **Volume Control**: Điều khiển âm lượng
- 📊 **Stats**: Thống kê thời gian nghe, bài hát được phát nhiều nhất

### **3. Playlist & Mix**
- 📋 **Playlist Management**: Tạo, sửa, xóa playlist
- 🎭 **Auto Mix Generation**: Tự động tạo mix dựa trên sở thích
- 🔄 **Smart Recommendations**: Gợi ý nhạc tương tự

### **4. Tìm kiếm & Tải nhạc **
```typescript
// Module để tìm kiếm ..
  searchSong(query: string)     // Tìm bài hát
  searchAlbum(query: string)    // Tìm album  
  searchArtist(query: string)   // Tìm nghệ sĩ
  searchPlaylist(query: string) // Tìm playlist

```

### **5. Giao diện & Themes**
- 🎨 **Dynamic Themes**: Theme thay đổi theo album đang phát
- 🌈 **Accent Colors**: Nhiều màu accent để chọn
- 📱 **Mini Mode**: Chế độ thu nhỏ
- 🖼️ **Beautiful UI**: Giao diện hiện đại, animations mượt

### **6. Tính năng nâng cao**
- 📜 **Offline Lyrics**: Hiển thị lời bài hát
- 🔔 **Desktop Notifications**: Thông báo khi chuyển bài
- 🎯 **Focus Mode**: Chế độ tập trung
- 📊 **Usage Statistics**: Thống kê sử dụng chi tiết

## 🛠️ **Công nghệ sử dụng**

### **Frontend**
- **Vue.js 2.6.14**: Framework chính
- **Vuex**: State management  
- **Vue Router**: Routing
- **TypeScript**: Type safety
- **SCSS**: Styling
- **Animate.css**: Animations

### **Backend** 
- **Electron 13.5.1**: Desktop app framework
- **Node.js**: Runtime
- **music-metadata**: Đọc metadata nhạc
- **node-id3**: Chỉnh sửa ID3 tags
- **axios**: HTTP requests

### **Build & Dev Tools**
- **Vue CLI**: Build tool chính
- **Webpack**: Module bundler
- **vue-cli-plugin-electron-builder**: Electron integration
- **cross-env**: Environment variables

## 📁 **Lưu trữ dữ liệu**

```javascript
// Đường dẫn lưu trữ
const paths = {
  appFolder: 'C:/Users/[user]/AppData/Roaming/flbmusic',
  albumArtFolder: 'C:/Users/[user]/AppData/Roaming/flbmusic/Album Art',
  artistPictureFolder: 'C:/Users/[user]/AppData/Roaming/flbmusic/Artist Pictures',
  musicFolder: 'C:/Users/[user]/Music',
  flbingFolder: 'C:/Users/[user]/Music/FLBing'
}
```

- **Settings**: JSON files trong AppData
- **Album Art**: Cache ảnh bìa album
- **Artist Pictures**: Cache ảnh nghệ sĩ  
- **Playlists**: JSON format
- **Statistics**: Tracking data về listening habits

## 🔧 **Workflow hoạt động**

1. **Khởi động**: App scan thư mục nhạc → Parse metadata → Hiển thị library
2. **Phát nhạc**: User chọn bài → Load file → Audio playback → Update stats
3. **Tải nhạc**: User search → API call → Parse results → Download options
4. **Quản lý**: User tạo playlist → Update tracker → Save to JSON

---
