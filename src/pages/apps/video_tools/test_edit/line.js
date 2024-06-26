import { randColor } from "@/utils/color.js";
import { uuid } from "@/utils/key.js";
/**
 * 时间揍单个数据
 */
export default class Line {
  leftTime = 2;
  constructor(file) {
    // 时间轴唯一
    this.key = uuid();
    this.name = file.name;
    this.type = "";
    this.duration = file.duration;
    this.left = 0;
    this.width = file.duration * this.leftTime;
    this.color = randColor();
    // 原始资源文件名
    this.fileKey = file.key;
    this.font = "";
  }

  setMedia() {
    this.type = "media";
  }
  setText() {
    this.type = "text";
  }
  setFont(path) {
    this.font = path;
  }
  getFont() {
    return this.font;
  }
  getLeftSecond() {
    return parseInt(this.left / this.leftTime);
  }
  getFile() {
    return "/" + this.fileKey;
  }
}
