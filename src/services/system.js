class System {
    async upload(files = {}) {
        if (!files.file) return '请上传有效文件';

        const { filepath } = files.file;
        const idx = filepath.indexOf('/public');
        const path = filepath.substring(idx);

        return { path };
    }
}

module.exports = new System();