<div align="center">

# 🎬 AE-Skills

**AI 驱动的 Adobe After Effects 自动化技能包**

一个 AI 代理技能包，使用 ExtendScript/JSX 编程构建、检查、自动化和排障 Adobe After Effects 项目。

[![After Effects](https://img.shields.io/badge/After%20Effects%202025-9999FF?style=for-the-badge&logo=adobeaftereffects&logoColor=white)](https://www.adobe.com/products/aftereffects.html)
[![ExtendScript](https://img.shields.io/badge/ExtendScript-JSX-orange?style=for-the-badge)](https://extendscript.docsforadobe.dev/)
[![PowerShell](https://img.shields.io/badge/PowerShell-5.1+-5391FE?style=for-the-badge&logo=powershell&logoColor=white)](https://learn.microsoft.com/en-us/powershell/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#license)

</div>

---

## 📖 概述

**AE-Dev** 是一个专为 AI 代理（Claude、OpenAI 等）设计的技能包，用于通过代码控制 Adobe After Effects。它捆绑了 **165+ 个 ExtendScript (JSX) 自动化脚本**、参考文档、可复用模板和 PowerShell 运行器 —— 使 AI 能够以编程方式生成、修改和渲染 AE 合成。

无需手动打关键帧和点击菜单，您只需用自然语言描述需求，AI 代理便会编写并执行 JSX 脚本在 After Effects 中构建。

## ✨ 核心特性

| 特性                          | 描述                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| 🤖 **AI 代理集成**            | 支持 Claude（通过 SKILL.md）和 OpenAI（通过 agents/openai.yaml）                     |
| 📜 **165+ 即用脚本**          | 涵盖合成、图层、关键帧、表达式、标记、属性等                                         |
| 🧩 **可复用模板**             | JSON 可调用的模板脚本，用于创建合成、形状、文本和效果                                |
| 🛡️ **健壮的错误处理**        | 主模板包含撤销组、日志记录、空值安全属性助手和关键帧缓动                              |
| 📚 **全面的参考资料**         | AE 脚本指南、58KB match-name 表和脚本分析文档                                        |
| ⚡ **一键执行**               | PowerShell 运行器，可在运行中的 AE 实例上执行任何 JSX 脚本                           |

## 📁 项目结构

```
ae-dev/
├── SKILL.md                              # AI 代理技能定义与说明
├── README.md                             # 本文件
│
├── agents/
│   └── openai.yaml                       # OpenAI 代理接口配置
│
├── assets/
│   ├── templates/                        # 11 个可复用 JSX 模板
│   │   ├── safe-ae-script-template.jsx   # ⭐ 主模板（日志、撤销、助手）
│   │   ├── createComposition.jsx         # 创建新合成
│   │   ├── createShapeLayer.jsx          # 创建形状图层
│   │   ├── createSolidLayer.jsx          # 创建纯色图层
│   │   ├── createTextLayer.jsx           # 创建文本图层
│   │   ├── applyEffect.jsx               # 为图层应用效果
│   │   ├── applyEffectTemplate.jsx       # 效果应用模板
│   │   ├── getLayerInfo.jsx              # 获取图层信息
│   │   ├── getProjectInfo.jsx            # 获取项目信息
│   │   ├── listCompositions.jsx          # 列出所有合成
│   │   └── setLayerProperties.jsx        # 设置图层属性
│   │
│   ├── Compositions/                     # 23 个脚本 — 合成操作
│   ├── Expressions/                      # 12 个脚本 — 表达式管理
│   ├── Keyframes/                        # 13 个脚本 — 关键帧操作
│   ├── Layers/                           # 43 个脚本 — 图层操作
│   ├── Lottie/                           #  2 个脚本 — Lottie 导出准备
│   ├── Markers/                          #  6 个脚本 — 标记操作
│   ├── Project/                          # 21 个脚本 — 项目级操作
│   ├── Properties/                       # 19 个脚本 — 属性操控
│   ├── Selection/                        # 12 个脚本 — 图层选择工具
│   └── Utilities/                        #  3 个脚本 — 时间线导航
│
├── references/
│   ├── official-guide.md                 # AE 脚本精简指南（7 KB）
│   ├── match-names.md                    # AE match name 参考表（58 KB）
│   └── common-jsx-control-scripts.md     # 全部 164 个脚本分析（67 KB）
│
└── scripts/
    └── run-ae-script.ps1                 # JSX 执行的 PowerShell 运行器
```

## 🚀 快速开始

### 前置要求

- **Adobe After Effects 2025** 已本地安装
- **PowerShell 5.1+**（Windows 10/11 预装）
- 支持技能加载的 AI 代理环境（Claude Code、OpenAI Agents 等）

### 安装步骤

1. **克隆仓库**

   ```bash
   git clone https://github.com/<shuaitongfan-dotcom>/ae-dev.git
   cd ae-dev
   ```

2. **配置 After Effects 路径**

   编辑 `scripts/run-ae-script.ps1`，更新默认路径以匹配**您的** AE 安装路径：

   ```powershell
   # ⚠️ 替换为您自己的 After Effects 安装路径
   [string]$AfterEffectsDir = "YOUR_AE_PATH\Adobe After Effects 2025\Support Files"
   ```

   > **注意：** 每个用户的 AE 安装路径不同。常见路径包括：
   > - `C:\Program Files\Adobe\Adobe After Effects 2025\Support Files`
   > - `D:\Adobe\Adobe After Effects 2025\Support Files`
   > - `D:\AE2025\Adobe After Effects 2025\Support Files`

3. **在 After Effects 中启用脚本执行**

   在 AE 中，前往 **编辑 → 首选项 → 常规**，勾选：

   > ☑️ 允许脚本写入文件和访问网络

### 快速使用

在运行中的 After Effects 实例上执行任何 JSX 脚本：

```powershell
.\scripts\run-ae-script.ps1 -ScriptPath "assets\templates\safe-ae-script-template.jsx"
```

或指定自定义 AE 路径（替换为您的实际安装路径）：

```powershell
.\scripts\run-ae-script.ps1 -ScriptPath "assets\Layers\Add_Background_Layer.jsx" `
    -AfterEffectsDir "YOUR_AE_PATH\Adobe After Effects 2025\Support Files"
```

## 📋 脚本分类

### 🎬 合成（23 个脚本）

管理和操控合成 — 添加背景、摄像机、参考线，调整设置，切换洋葱皮，保存帧为 PNG 等。

<details>
<summary>查看所有脚本</summary>

| 脚本                                  | 描述                           |
| ------------------------------------- | ------------------------------ |
| `Add_Background_Layer.jsx`            | 创建自动缩放的背景形状图层     |
| `Add_Camera_With_Controller.jsx`      | 添加带控制器的摄像机           |
| `Add_Comp_Guide.jsx`                  | 添加合成参考线                 |
| `Add_Posterize_Time_Adjustment.jsx`   | 添加色调分离调整图层           |
| `Center_Composition.jsx`              | 居中合成视图                   |
| `Change_Nested_Comp_Background.jsx`   | 更改嵌套合成背景               |
| `Change_Nested_Comp_Duration.jsx`     | 更改嵌套合成持续时间           |
| `Change_Nested_Comp_Frame_Rate.jsx`   | 更改嵌套合成帧率               |
| `Change_Nested_Comp_Start_Frame.jsx`  | 更改嵌套合成起始帧             |
| `Change_Nested_Comp_Work_Area.jsx`    | 更改嵌套合成工作区             |
| `Cycle_Background_Color.jsx`          | 循环切换背景颜色               |
| `Enable_Collapse_Transformations.jsx` | 启用折叠变换                   |
| `Enable_Motion_Blur.jsx`              | 为合成启用运动模糊             |
| `Force_Panel_Refresh.jsx`             | 强制刷新 AE 面板               |
| `Increment_Versions.jsx`              | 递增合成版本号                 |
| `Rename_Compositions.jsx`             | 重命名合成                     |
| `Save_Frame_As_PNG.jsx`               | 将当前帧保存为 PNG             |
| `Set_Work_Area_To_Markers.jsx`        | 从标记设置工作区               |
| `Toggle_Onion_Skinning.jsx`           | 切换洋葱皮                     |
| `Transfer_Work_Areas.jsx`             | 在合成间转移工作区             |

</details>

### 📐 图层（43 个脚本）

最大的分类 — 图层操控包括父子关系、重命名、复制、轨道遮罩、混合模式、操控点等。

<details>
<summary>查看所有脚本</summary>

| 脚本                              | 描述                       |
| --------------------------------- | -------------------------- |
| `Add_3D_Break.jsx`                | 添加 3D 图层中断           |
| `Add_Comment.jsx`                 | 为图层添加注释             |
| `Add_Color_Cycle_Fill.jsx`        | 添加颜色循环填充效果       |
| `Append_To_Layer_Name.jsx`        | 在图层名称后追加文本       |
| `Calculate_Distance.jsx`          | 计算图层间距离             |
| `Connect_Layers_With_Line.jsx`    | 用形状线连接图层           |
| `Convert_SRT_Subtitles.jsx`       | 将 SRT 字幕转换为文本图层  |
| `Create_Shapes_From_Text.jsx`     | 从文本创建形状图层         |
| `Duplicate_And_Extend.jsx`        | 复制并延长图层             |
| `Find_Effect.jsx`                 | 查找图层上的效果           |
| `Get_Layer_Duration.jsx`          | 获取图层持续时间           |
| `Hard_Solo.jsx`                   | 硬独奏选中图层             |
| `Lock_Unlock_Layers.jsx`          | 锁定或解锁图层             |
| `Match_In_Points.jsx`             | 匹配入点                   |
| `Match_Start_Times.jsx`           | 匹配开始时间               |
| `Parent_To_Closest.jsx`           | 父子链接到最近图层         |
| `Parent_To_Opacity.jsx`           | 父子链接不透明度           |
| `Parent_Selected_To_Below.jsx`    | 将选中图层链接到下方图层   |
| `Posterize_Layer_Start.jsx`       | 色调分离图层开始时间       |
| `Randomize_Layer_Start.jsx`       | 随机化图层开始时间         |
| `Rename_Layers_Letters.jsx`       | 用字母重命名图层           |
| `Rename_Layers_Numbers.jsx`       | 用数字重命名图层           |
| `Rename_Layers_Text.jsx`          | 用自定义文本重命名图层     |
| `Rename_Puppet_Pins_DuIK.jsx`     | 为 DuIK 重命名操控点       |
| `Rename_Matte_Layers.jsx`         | 重命名遮罩图层             |
| `Replace_Grid_Rig_Controls.jsx`   | 替换网格绑定控制器         |
| `Replace_Text_In_Names.jsx`       | 替换图层名称中的文本       |
| `Reset_Layer_Names.jsx`           | 重置图层名称为默认值       |
| `Reset_Layer_Labels.jsx`          | 重置图层标签               |
| `Set_Average_Position.jsx`        | 设置图层平均位置           |
| `Set_Track_Matte.jsx`             | 设置轨道遮罩               |
| `Shift_Layer_Start.jsx`           | 偏移图层开始时间           |
| `Stick_Effect.jsx`                | 将效果固定到图层           |
| `Toggle_Blend_Mode.jsx`           | 切换混合模式               |
| `Toggle_Puppet_Pins.jsx`          | 切换操控点                 |
| `Toggle_Effects.jsx`              | 切换效果开关               |
| `Zero_Position.jsx`               | 将图层位置归零             |

</details>

### ⏱️ 关键帧（13 个脚本）

关键帧操作 — 添加动画、计算差异、填充关键帧、定格关键帧、缓动等。

<details>
<summary>查看所有脚本</summary>

| 脚本                                 | 描述                     |
| ------------------------------------ | ------------------------ |
| `Add_Text_Animation.jsx`             | 添加文本动画器           |
| `Calculate_Keyframe_Difference.jsx`  | 计算关键帧间差异         |
| `Calculate_Frames_To_Keyframe.jsx`   | 计算到选中关键帧的帧数   |
| `Fill_Keyframes.jsx`                 | 填充缺失关键帧           |
| `Invert_Keyframes.jsx`               | 反转关键帧值             |
| `Make_Hold_Keyframes.jsx`            | 转换为定格关键帧         |
| `Multiply_Keyframes.jsx`             | 乘以关键帧值             |
| `Posterize_Keyframes.jsx`            | 色调分离关键帧值         |
| `Remove_Redundant_Keyframes.jsx`     | 移除冗余关键帧           |
| `Round_Keyframes.jsx`                | 四舍五入关键帧值         |
| `Set_Spatial_In_Tangent.jsx`         | 设置空间入切线           |
| `Keyframe_Group_Opacities.jsx`       | 关键帧组不透明度         |
| `Keyframe_Current_From_Expression.jsx` | 将表达式烘焙为关键帧   |

</details>

### 🔢 表达式（12 个脚本）

表达式管理 — 添加、启用、禁用、查找、修复和更新表达式。

<details>
<summary>查看所有脚本</summary>

| 脚本                             | 描述               |
| -------------------------------- | ------------------ |
| `Add_Posterize_Time.jsx`         | 添加色调分离时间   |
| `Add_Simple_Loop.jsx`            | 添加简单循环       |
| `Append_Expression.jsx`          | 追加到现有表达式   |
| `Enable_Disable_Expressions.jsx` | 切换表达式开关     |
| `Find_Expression.jsx`            | 按内容查找表达式   |
| `Fix_Expression.jsx`             | 修复损坏的表达式   |
| `Update_Expression.jsx`          | 更新表达式值       |
| `Maintain_Stroke_Width.jsx`      | 维持描边宽度       |
| `Maintain_Scale.jsx`             | 维持缩放           |
| `Set_Time_Remap_Loop.jsx`        | 设置时间重映射循环 |
| `Update_Stroke_Weight.jsx`       | 更新描边粗细       |

</details>

### 🏷️ 属性（19 个脚本）

属性操控 — 动画控件、基本图形、路径操作、颜色管理。

<details>
<summary>查看所有脚本</summary>

| 脚本                             | 描述                 |
| -------------------------------- | -------------------- |
| `Add_Animation_Controls.jsx`     | 添加动画控制空对象   |
| `Add_Essential_Graphics.jsx`     | 添加基本图形属性     |
| `Add_Visibility_Controller.jsx`  | 添加可见性控制器     |
| `Build_Dropdown_Selector.jsx`    | 构建下拉选择器       |
| `Estimate_Path_Length.jsx`       | 估算路径长度         |
| `Export_Path_Points.jsx`         | 导出路径点到文件     |
| `Expose_Essential_Properties.jsx` | 暴露基本属性        |
| `Flip_Path_Horizontal.jsx`       | 水平翻转路径         |
| `Flip_Path_Vertical.jsx`         | 垂直翻转路径         |
| `Increase_Pin_Size.jsx`          | 增大操控点尺寸       |
| `Move_Parametric_Anchor.jsx`     | 移动参数锚点         |
| `Remove_Disabled_Strokes.jsx`    | 移除禁用的描边       |
| `Rename_Property.jsx`            | 重命名属性           |
| `Round_Property_Values.jsx`      | 四舍五入属性值       |
| `Separate_Property_Dimensions.jsx` | 分离属性维度        |
| `Swap_Property_Values.jsx`       | 交换属性值           |
| `Set_New_Color.jsx`              | 设置新颜色值         |
| `Toggle_Puppet_On_Transparent.jsx` | 切换透明背景操控   |
| `Toggle_Puppet_Pin_Type.jsx`     | 切换操控点类型       |

</details>

### 📁 项目（21 个脚本）

项目级操作 — 渲染队列管理、文件夹组织、文件导出和清理。

<details>
<summary>查看所有脚本</summary>

| 脚本                                  | 描述                   |
| ------------------------------------- | ---------------------- |
| `Add_Folder_To_Render_Queue.jsx`      | 添加文件夹到渲染队列   |
| `Add_Labeled_Items_To_Render.jsx`     | 添加带标签项到渲染队列 |
| `Add_Selection_To_Render.jsx`         | 添加选中项到渲染队列   |
| `Add_Selection_To_New_Folder.jsx`     | 添加选中项到新文件夹   |
| `Clean_Render_Queue.jsx`              | 清理渲染队列           |
| `Clean_Selected_Folders.jsx`          | 清理选中文件夹         |
| `Cleanup_Overlord_Folder.jsx`         | 清理 Overlord 文件夹   |
| `Export_Text_To_File.jsx`             | 导出文本内容到文件     |
| `Manual_Render_PNG_Sequence.jsx`      | 手动渲染 PNG 序列      |
| `Merge_Imported_Items.jsx`            | 合并导入项             |
| `Remove_Proxies.jsx`                  | 移除代理               |
| `Rename_Layer_Sources.jsx`            | 重命名图层源           |
| `Rename_Project_Items.jsx`            | 重命名项目项           |
| `Replace_Text_In_Project_Names.jsx`   | 替换项目项名称中的文本 |
| `Reset_Imported_Item_Names.jsx`       | 重置导入项名称         |
| `Reveal_Project_File.jsx`             | 在资源管理器中显示项目文件 |
| `Set_Labels.jsx`                      | 设置标签颜色           |
| `Set_Proxies.jsx`                     | 设置代理               |
| `Toggle_Preserve_Nested_Frame_Rate.jsx` | 切换保留嵌套帧率     |
| `Toggle_Preserve_Nested_Timecode.jsx`   | 切换保留嵌套时间码   |

</details>

### 🎯 选择（12 个脚本）

图层选择工具 — 按类型、关系、标签等选择。

<details>
<summary>查看所有脚本</summary>

| 脚本                            | 描述               |
| ------------------------------- | ------------------ |
| `Get_Layer_Selection.jsx`       | 获取当前图层选择   |
| `Set_Layer_Selection.jsx`       | 设置图层选择       |
| `Select_All_Children.jsx`       | 选择所有子图层     |
| `Select_Disabled_Layers.jsx`    | 选择禁用的图层     |
| `Select_Guide_Layers.jsx`       | 选择参考线图层     |
| `Select_Layers_Below_Label.jsx` | 选择标签下方图层   |
| `Select_Non_Null_Layers.jsx`    | 选择非空图层       |
| `Select_Parent_Layers.jsx`      | 选择父图层         |
| `Select_Random_Layers.jsx`      | 随机选择图层       |
| `Select_Shape_Layers.jsx`       | 选择形状图层       |
| `Select_Text_Layers.jsx`        | 选择文本图层       |
| `Select_Unparented_Layers.jsx`  | 选择无父级图层     |

</details>

### 📦 标记（6 个脚本）

标记操作 — 在合成和图层间添加、复制和管理标记。

<details>
<summary>查看所有脚本</summary>

| 脚本                                  | 描述                 |
| ------------------------------------- | -------------------- |
| `Add_Marker_At_Out_Point.jsx`         | 在出点添加标记       |
| `Add_Marker_At_Selected_Keyframe.jsx` | 在选中关键帧添加标记 |
| `Add_Marker_At_Work_Area.jsx`         | 在工作区添加标记     |
| `Add_Marker_At_Selected_Layers.jsx`   | 在选中图层添加标记   |
| `Copy_Markers_Between_Comps.jsx`      | 在合成间复制标记     |
| `Copy_Markers_Between_Layers.jsx`     | 在图层间复制标记     |

</details>

### 🎨 Lottie（2 个脚本）

为 Lottie 导出准备合成。

| 脚本                              | 描述                               |
| --------------------------------- | ---------------------------------- |
| `Convert_Drop_Shadow_To_Blur.jsx` | 将投影转换为高斯模糊以适配 Lottie  |
| `Prepare_Out_Points.jsx`          | 为 Lottie 准备图层出点             |

### 🔧 工具（3 个脚本）

时间线导航和调试的通用工具。

| 脚本                             | 描述               |
| -------------------------------- | ------------------ |
| `Alert_Selected_Layer_Index.jsx` | 显示选中图层索引   |
| `Frame_Navigator.jsx`            | ScriptUI 帧导航面板 |
| `Ms_To_Frames.jsx`               | 毫秒转帧数         |

## 📐 两种脚本模式

### 模式 A — 自包含脚本

`assets/` 中的大多数脚本遵循此模式。它们假设有活动的 AE 合成，操作选中的图层，执行单一聚焦任务：

```javascript
(function () {
  var comp = app.project.activeItem;
  if (!(comp instanceof CompItem)) {
    throw new Error("No active composition.");
  }
  app.beginUndoGroup("My Operation");
  try {
    // ... 执行操作 ...
  } catch (e) {
    // ... 处理错误 ...
  } finally {
    app.endUndoGroup();
  }
})();
```

### 模式 B — JSON 可调用模板

`assets/templates/` 中的脚本从 `args.json` 读取参数并返回结构化结果，专为与外部启动器集成而设计：

```javascript
function doTask(args) {
  var compName = args.compName || "";
  var layerName = args.layerName || "";
  // ... 查找并操作 ...
  $.write(JSON.stringify({ success: true, data: result }));
}
```

## ⚙️ 配置

### After Effects 路径

`scripts/run-ae-script.ps1` 中的默认 AE 路径 — **替换为您自己的路径**：

```powershell
# ⚠️ 每个用户的 AE 安装路径不同 — 更新此项以匹配您的路径
[string]$AfterEffectsDir = "YOUR_AE_PATH\Adobe After Effects 2025\Support Files"
```

通过命令行覆盖（同样替换为您的实际路径）：

```powershell
.\scripts\run-ae-script.ps1 -ScriptPath "script.jsx" -AfterEffectsDir "YOUR_AE_PATH\Support Files"
```

### OpenAI 代理接口

`agents/openai.yaml` 为 OpenAI 兼容代理配置技能：

```yaml
interface:
  display_name: "AE Generation"
  short_description: "Automate After Effects with reliable JSX."
  default_prompt: "Use $ae-dev to create an editable After Effects AE Generation animation."
policy:
  allow_implicit_invocation: true
```

## 🛡️ 可靠性规则

该技能遵循以下核心原则以确保稳健的脚本执行：

1. **使用 match name** 而非本地化显示名称（例如 `ADBE Transform Group` 而非 "Transform"）
2. **永远不要猜测效果属性索引** — 先转储子属性，再设置值
3. **检查每个属性查找**，在调用 `setValue` 前避免 `TypeError: null is not an object`
4. **构建 `KeyframeEase` 数组**时使用正确的维度（标量 1D，位置 2D，3D 图层 3D）
5. **使用 1 基索引** 访问 AE 集合（`project.item(1)`、`layer.property(1)`）
6. **用撤销组包裹变更操作** — `app.beginUndoGroup()` / `app.endUndoGroup()`
7. **始终写入日志文件** 再声称成功
8. **避免 UI 语言依赖** — match name 在所有 AE 语言版本中稳定

## 📚 参考资料

| 文档                                                                      | 大小  | 描述                                                   |
| ------------------------------------------------------------------------- | ----- | ------------------------------------------------------ |
| [official-guide.md](references/official-guide.md)                         | 7 KB  | AE 脚本精简指南 — 对象模型、工作流、渲染、关键帧       |
| [match-names.md](references/match-names.md)                               | 58 KB | 变换、形状、文本、效果的完整 match name 参考           |
| [common-jsx-control-scripts.md](references/common-jsx-control-scripts.md) | 67 KB | 全部 164 个脚本的详细分析及使用模式                    |

## 🤝 贡献

欢迎贡献！以下是您可以帮助的方式：

1. **Fork** 仓库
2. **创建** 功能分支（`git checkout -b feature/amazing-script`）
3. **提交** 更改（`git commit -m 'Add amazing script'`）
4. **推送** 到分支（`git push origin feature/amazing-script`）
5. **发起** Pull Request

### 脚本编写指南

添加新脚本时：

- 使用 **ExtendScript 安全语法**（`var`、函数声明、ES3 兼容）
- 用 `app.beginUndoGroup()` / `app.endUndoGroup()` 包裹变更操作
- 包含 `try/catch/finally` 错误处理
- 使用 **match name** 而非本地化显示名称
- 添加包含描述、作者和日期的头部注释
- 遵循现有命名规范：`Pascal_Case_With_Underscores.jsx`

## 📄 许可证

本项目基于 MIT 许可证 — 详情请参阅 [LICENSE](LICENSE) 文件。

Kyle Martinez 编写的单个 JSX 脚本包含内联免责声明：

> "This script is provided 'as is,' without warranty of any kind, expressed or implied. In no event shall the author be held liable for any damages arising in any way from the use of this script."

## 🙏 致谢

- [Adobe After Effects](https://www.adobe.com/products/aftereffects.html) — 本项目自动化的创意平台
- [Adobe ExtendScript Documentation](https://extendscript.docsforadobe.dev/) — 脚本语言参考
- [after-effects-scripts](https://github.com/kyletmartinez/after-effects-scripts) by Kyle Martinez — `assets/` 中引用的 JSX 脚本
- [after-effects-mcp](https://github.com/Dakkshin/after-effects-mcp) by Dakkshin — `assets/` 中引用的 MCP 集成模式和脚本
- 所有帮助构建和改进脚本库的贡献者

---

<div align="center">

**为动效设计社区用 ❤️ 制作**

</div>

---

<!-- English Version Below -->

---

<div align="center">

# 🎬 AE-Dev

**AI-Driven Adobe After Effects Automation Skill**

An AI agent skill package that programmatically builds, inspects, automates, and troubleshoots Adobe After Effects projects using ExtendScript/JSX.

[![After Effects](https://img.shields.io/badge/After%20Effects%202025-9999FF?style=for-the-badge&logo=adobeaftereffects&logoColor=white)](https://www.adobe.com/products/aftereffects.html)
[![ExtendScript](https://img.shields.io/badge/ExtendScript-JSX-orange?style=for-the-badge)](https://extendscript.docsforadobe.dev/)
[![PowerShell](https://img.shields.io/badge/PowerShell-5.1+-5391FE?style=for-the-badge&logo=powershell&logoColor=white)](https://learn.microsoft.com/en-us/powershell/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#license)

</div>

---

## 📖 Overview

**AE-Dev** is a curated skill package designed for AI agents (Claude, OpenAI, etc.) to control Adobe After Effects through code. It bundles **165+ ExtendScript (JSX) automation scripts**, reference documentation, reusable templates, and a PowerShell runner — enabling AI to generate, modify, and render AE compositions programmatically.

Instead of manual keyframing and clicking through menus, you describe what you want in natural language, and the AI agent writes and executes JSX scripts to build it inside After Effects.

## ✨ Key Features

| Feature                          | Description                                                                                |
| -------------------------------- | ------------------------------------------------------------------------------------------ |
| 🤖 **AI Agent Integration**      | Works with Claude (via SKILL.md) and OpenAI (via agents/openai.yaml)                       |
| 📜 **165+ Ready-to-Use Scripts** | Covering compositions, layers, keyframes, expressions, markers, properties, and more       |
| 🧩 **Reusable Templates**        | JSON-callable template scripts for creating comps, shapes, text, and effects               |
| 🛡️ **Robust Error Handling**     | Master template with undo groups, logging, null-safe property helpers, and keyframe easing |
| 📚 **Comprehensive References**  | AE scripting guide, 58KB match-name tables, and script analysis docs                       |
| ⚡ **One-Command Execution**     | PowerShell runner to execute any JSX script against a running AE instance                  |

## 📁 Project Structure

```
ae-dev/
├── SKILL.md                              # Skill definition & instructions for AI agents
├── README.md                             # This file
│
├── agents/
│   └── openai.yaml                       # OpenAI agent interface configuration
│
├── assets/
│   ├── templates/                        # 11 reusable JSX templates
│   │   ├── safe-ae-script-template.jsx   # ⭐ Master template (logging, undo, helpers)
│   │   ├── createComposition.jsx         # Create a new composition
│   │   ├── createShapeLayer.jsx          # Create shape layers
│   │   ├── createSolidLayer.jsx          # Create solid layers
│   │   ├── createTextLayer.jsx           # Create text layers
│   │   ├── applyEffect.jsx               # Apply effects to layers
│   │   ├── applyEffectTemplate.jsx       # Effect application template
│   │   ├── getLayerInfo.jsx              # Get layer information
│   │   ├── getProjectInfo.jsx            # Get project information
│   │   ├── listCompositions.jsx          # List all compositions
│   │   └── setLayerProperties.jsx        # Set layer properties
│   │
│   ├── Compositions/                     # 23 scripts — comp operations
│   ├── Expressions/                      # 12 scripts — expression management
│   ├── Keyframes/                        # 13 scripts — keyframe operations
│   ├── Layers/                           # 43 scripts — layer operations
│   ├── Lottie/                           #  2 scripts — Lottie export prep
│   ├── Markers/                          #  6 scripts — marker operations
│   ├── Project/                          # 21 scripts — project-level operations
│   ├── Properties/                       # 19 scripts — property manipulation
│   ├── Selection/                        # 12 scripts — layer selection utilities
│   └── Utilities/                        #  3 scripts — timeline navigation
│
├── references/
│   ├── official-guide.md                 # Condensed AE scripting guide (7 KB)
│   ├── match-names.md                    # AE match name reference tables (58 KB)
│   └── common-jsx-control-scripts.md     # Analysis of all 164 scripts (67 KB)
│
└── scripts/
    └── run-ae-script.ps1                 # PowerShell runner for JSX execution
```

## 🚀 Getting Started

### Prerequisites

- **Adobe After Effects 2025** installed locally
- **PowerShell 5.1+** (pre-installed on Windows 10/11)
- An AI agent environment that supports skill loading (Claude Code, OpenAI Agents, etc.)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/<shuaitongfan-dotcom>/ae-dev.git
   cd ae-dev
   ```

2. **Configure the After Effects path**

   Edit `scripts/run-ae-script.ps1` and update the default path to match **your** AE installation:

   ```powershell
   # ⚠️ Replace with your own After Effects installation path
   [string]$AfterEffectsDir = "YOUR_AE_PATH\Adobe After Effects 2025\Support Files"
   ```

   > **Note:** Each user's AE installation path is different. Common paths include:
   > - `C:\Program Files\Adobe\Adobe After Effects 2025\Support Files`
   > - `D:\Adobe\Adobe After Effects 2025\Support Files`
   > - `D:\AE2025\Adobe After Effects 2025\Support Files`

3. **Enable script execution in After Effects**

   In AE, go to **Edit → Preferences → General** and check:

   > ☑️ Allow Scripts To Write Files And Access Network

### Quick Start

Run any JSX script against a running After Effects instance:

```powershell
.\scripts\run-ae-script.ps1 -ScriptPath "assets\templates\safe-ae-script-template.jsx"
```

Or specify a custom AE path (replace with your actual installation path):

```powershell
.\scripts\run-ae-script.ps1 -ScriptPath "assets\Layers\Add_Background_Layer.jsx" `
    -AfterEffectsDir "YOUR_AE_PATH\Adobe After Effects 2025\Support Files"
```

## 📋 Script Categories

### 🎬 Compositions (23 scripts)

Manage and manipulate compositions — add backgrounds, cameras, guides, adjust settings, toggle onion skinning, save frames as PNG, and more.

<details>
<summary>View all scripts</summary>

| Script                                | Description                                    |
| ------------------------------------- | ---------------------------------------------- |
| `Add_Background_Layer.jsx`            | Create an auto-resizing background shape layer |
| `Add_Camera_With_Controller.jsx`      | Add a camera with a null controller            |
| `Add_Comp_Guide.jsx`                  | Add composition guides                         |
| `Add_Posterize_Time_Adjustment.jsx`   | Add a posterize time adjustment layer          |
| `Center_Composition.jsx`              | Center the composition view                    |
| `Change_Nested_Comp_Background.jsx`   | Change background of nested compositions       |
| `Change_Nested_Comp_Duration.jsx`     | Change duration of nested compositions         |
| `Change_Nested_Comp_Frame_Rate.jsx`   | Change frame rate of nested compositions       |
| `Change_Nested_Comp_Start_Frame.jsx`  | Change start frame of nested compositions      |
| `Change_Nested_Comp_Work_Area.jsx`    | Change work area of nested compositions        |
| `Cycle_Background_Color.jsx`          | Cycle through background colors                |
| `Enable_Collapse_Transformations.jsx` | Enable collapse transformations                |
| `Enable_Motion_Blur.jsx`              | Enable motion blur on compositions             |
| `Force_Panel_Refresh.jsx`             | Force AE panel refresh                         |
| `Increment_Versions.jsx`              | Increment composition version numbers          |
| `Rename_Compositions.jsx`             | Rename compositions                            |
| `Save_Frame_As_PNG.jsx`               | Save current frame as PNG                      |
| `Set_Work_Area_To_Markers.jsx`        | Set work area from markers                     |
| `Toggle_Onion_Skinning.jsx`           | Toggle onion skinning                          |
| `Transfer_Work_Areas.jsx`             | Transfer work areas between comps              |

</details>

### 📐 Layers (43 scripts)

The largest category — layer manipulation including parenting, renaming, duplicating, track mattes, blend modes, puppet pins, and more.

<details>
<summary>View all scripts</summary>

| Script                          | Description                          |
| ------------------------------- | ------------------------------------ |
| `Add_3D_Break.jsx`              | Add a 3D layer break                 |
| `Add_Comment.jsx`               | Add comments to layers               |
| `Add_Color_Cycle_Fill.jsx`      | Add color cycling fill effect        |
| `Append_To_Layer_Name.jsx`      | Append text to layer names           |
| `Calculate_Distance.jsx`        | Calculate distance between layers    |
| `Connect_Layers_With_Line.jsx`  | Connect layers with a shape line     |
| `Convert_SRT_Subtitles.jsx`     | Convert SRT subtitles to text layers |
| `Create_Shapes_From_Text.jsx`   | Create shape layers from text        |
| `Duplicate_And_Extend.jsx`      | Duplicate and extend layers          |
| `Find_Effect.jsx`               | Find effects on layers               |
| `Get_Layer_Duration.jsx`        | Get layer duration                   |
| `Hard_Solo.jsx`                 | Hard solo selected layers            |
| `Lock_Unlock_Layers.jsx`        | Lock or unlock layers                |
| `Match_In_Points.jsx`           | Match in-points across layers        |
| `Match_Start_Times.jsx`         | Match start times across layers      |
| `Parent_To_Closest.jsx`         | Parent to closest layer              |
| `Parent_To_Opacity.jsx`         | Parent opacity to another layer      |
| `Parent_Selected_To_Below.jsx`  | Parent selected to layer below       |
| `Posterize_Layer_Start.jsx`     | Posterize layer start times          |
| `Randomize_Layer_Start.jsx`     | Randomize layer start times          |
| `Rename_Layers_Letters.jsx`     | Rename layers with letters           |
| `Rename_Layers_Numbers.jsx`     | Rename layers with numbers           |
| `Rename_Layers_Text.jsx`        | Rename layers with custom text       |
| `Rename_Puppet_Pins_DuIK.jsx`   | Rename puppet pins for DuIK          |
| `Rename_Matte_Layers.jsx`       | Rename matte layers                  |
| `Replace_Grid_Rig_Controls.jsx` | Replace grid rig controls            |
| `Replace_Text_In_Names.jsx`     | Replace text in layer names          |
| `Reset_Layer_Names.jsx`         | Reset layer names to defaults        |
| `Reset_Layer_Labels.jsx`        | Reset layer labels                   |
| `Set_Average_Position.jsx`      | Set average position of layers       |
| `Set_Track_Matte.jsx`           | Set track matte                      |
| `Shift_Layer_Start.jsx`         | Shift layer start times              |
| `Stick_Effect.jsx`              | Stick effect to layer                |
| `Toggle_Blend_Mode.jsx`         | Toggle blend modes                   |
| `Toggle_Puppet_Pins.jsx`        | Toggle puppet pins                   |
| `Toggle_Effects.jsx`            | Toggle effects on/off                |
| `Zero_Position.jsx`             | Zero out layer positions             |

</details>

### ⏱️ Keyframes (13 scripts)

Keyframe operations — add animation, calculate differences, fill keyframes, hold keyframes, easing, and more.

<details>
<summary>View all scripts</summary>

| Script                                 | Description                            |
| -------------------------------------- | -------------------------------------- |
| `Add_Text_Animation.jsx`               | Add text animator                      |
| `Calculate_Keyframe_Difference.jsx`    | Calculate difference between keyframes |
| `Calculate_Frames_To_Keyframe.jsx`     | Calculate frames to selected keyframe  |
| `Fill_Keyframes.jsx`                   | Fill in missing keyframes              |
| `Invert_Keyframes.jsx`                 | Invert keyframe values                 |
| `Make_Hold_Keyframes.jsx`              | Convert to hold keyframes              |
| `Multiply_Keyframes.jsx`               | Multiply keyframe values               |
| `Posterize_Keyframes.jsx`              | Posterize keyframe values              |
| `Remove_Redundant_Keyframes.jsx`       | Remove redundant keyframes             |
| `Round_Keyframes.jsx`                  | Round keyframe values                  |
| `Set_Spatial_In_Tangent.jsx`           | Set spatial in-tangent                 |
| `Keyframe_Group_Opacities.jsx`         | Keyframe group opacities               |
| `Keyframe_Current_From_Expression.jsx` | Bake expression to keyframes           |

</details>

### 🔢 Expressions (12 scripts)

Expression management — add, enable, disable, find, fix, and update expressions.

<details>
<summary>View all scripts</summary>

| Script                           | Description                      |
| -------------------------------- | -------------------------------- |
| `Add_Posterize_Time.jsx`         | Add posterize time expression    |
| `Add_Simple_Loop.jsx`            | Add simple loop expression       |
| `Append_Expression.jsx`          | Append to existing expression    |
| `Enable_Disable_Expressions.jsx` | Toggle expressions on/off        |
| `Find_Expression.jsx`            | Find expressions by content      |
| `Fix_Expression.jsx`             | Fix broken expressions           |
| `Update_Expression.jsx`          | Update expression values         |
| `Maintain_Stroke_Width.jsx`      | Maintain stroke width expression |
| `Maintain_Scale.jsx`             | Maintain scale expression        |
| `Set_Time_Remap_Loop.jsx`        | Set time remap loop              |
| `Update_Stroke_Weight.jsx`       | Update stroke weight expression  |

</details>

### 🏷️ Properties (19 scripts)

Property manipulation — animation controls, essential graphics, path operations, color management.

<details>
<summary>View all scripts</summary>

| Script                             | Description                       |
| ---------------------------------- | --------------------------------- |
| `Add_Animation_Controls.jsx`       | Add animation control null        |
| `Add_Essential_Graphics.jsx`       | Add essential graphics properties |
| `Add_Visibility_Controller.jsx`    | Add visibility controller         |
| `Build_Dropdown_Selector.jsx`      | Build dropdown selector           |
| `Estimate_Path_Length.jsx`         | Estimate path length              |
| `Export_Path_Points.jsx`           | Export path points to file        |
| `Expose_Essential_Properties.jsx`  | Expose essential properties       |
| `Flip_Path_Horizontal.jsx`         | Flip path horizontally            |
| `Flip_Path_Vertical.jsx`           | Flip path vertically              |
| `Increase_Pin_Size.jsx`            | Increase puppet pin sizes         |
| `Move_Parametric_Anchor.jsx`       | Move parametric anchor points     |
| `Remove_Disabled_Strokes.jsx`      | Remove disabled strokes           |
| `Rename_Property.jsx`              | Rename properties                 |
| `Round_Property_Values.jsx`        | Round property values             |
| `Separate_Property_Dimensions.jsx` | Separate property dimensions      |
| `Swap_Property_Values.jsx`         | Swap property values              |
| `Set_New_Color.jsx`                | Set new color values              |
| `Toggle_Puppet_On_Transparent.jsx` | Toggle puppet on transparent      |
| `Toggle_Puppet_Pin_Type.jsx`       | Toggle puppet pin types           |

</details>

### 📁 Project (21 scripts)

Project-level operations — render queue management, folder organization, file export, and cleanup.

<details>
<summary>View all scripts</summary>

| Script                                  | Description                        |
| --------------------------------------- | ---------------------------------- |
| `Add_Folder_To_Render_Queue.jsx`        | Add folder to render queue         |
| `Add_Labeled_Items_To_Render.jsx`       | Add labeled items to render queue  |
| `Add_Selection_To_Render.jsx`           | Add selection to render queue      |
| `Add_Selection_To_New_Folder.jsx`       | Add selection to new folder        |
| `Clean_Render_Queue.jsx`                | Clean render queue                 |
| `Clean_Selected_Folders.jsx`            | Clean selected folders             |
| `Cleanup_Overlord_Folder.jsx`           | Clean up Overlord folder           |
| `Export_Text_To_File.jsx`               | Export text content to file        |
| `Manual_Render_PNG_Sequence.jsx`        | Manually render PNG sequence       |
| `Merge_Imported_Items.jsx`              | Merge imported items               |
| `Remove_Proxies.jsx`                    | Remove proxies                     |
| `Rename_Layer_Sources.jsx`              | Rename layer sources               |
| `Rename_Project_Items.jsx`              | Rename project items               |
| `Replace_Text_In_Project_Names.jsx`     | Replace text in project item names |
| `Reset_Imported_Item_Names.jsx`         | Reset imported item names          |
| `Reveal_Project_File.jsx`               | Reveal project file in explorer    |
| `Set_Labels.jsx`                        | Set label colors                   |
| `Set_Proxies.jsx`                       | Set proxies                        |
| `Toggle_Preserve_Nested_Frame_Rate.jsx` | Toggle preserve nested frame rate  |
| `Toggle_Preserve_Nested_Timecode.jsx`   | Toggle preserve nested timecode    |

</details>

### 🎯 Selection (12 scripts)

Layer selection utilities — select by type, relationship, label, and more.

<details>
<summary>View all scripts</summary>

| Script                          | Description                 |
| ------------------------------- | --------------------------- |
| `Get_Layer_Selection.jsx`       | Get current layer selection |
| `Set_Layer_Selection.jsx`       | Set layer selection         |
| `Select_All_Children.jsx`       | Select all child layers     |
| `Select_Disabled_Layers.jsx`    | Select disabled layers      |
| `Select_Guide_Layers.jsx`       | Select guide layers         |
| `Select_Layers_Below_Label.jsx` | Select layers below label   |
| `Select_Non_Null_Layers.jsx`    | Select non-null layers      |
| `Select_Parent_Layers.jsx`      | Select parent layers        |
| `Select_Random_Layers.jsx`      | Select random layers        |
| `Select_Shape_Layers.jsx`       | Select shape layers         |
| `Select_Text_Layers.jsx`        | Select text layers          |
| `Select_Unparented_Layers.jsx`  | Select unparented layers    |

</details>

### 📦 Markers (6 scripts)

Marker operations — add, copy, and manage markers across compositions and layers.

<details>
<summary>View all scripts</summary>

| Script                                | Description                       |
| ------------------------------------- | --------------------------------- |
| `Add_Marker_At_Out_Point.jsx`         | Add marker at layer out-point     |
| `Add_Marker_At_Selected_Keyframe.jsx` | Add marker at selected keyframe   |
| `Add_Marker_At_Work_Area.jsx`         | Add marker at work area           |
| `Add_Marker_At_Selected_Layers.jsx`   | Add markers at selected layers    |
| `Copy_Markers_Between_Comps.jsx`      | Copy markers between compositions |
| `Copy_Markers_Between_Layers.jsx`     | Copy markers between layers       |

</details>

### 🎨 Lottie (2 scripts)

Prepare compositions for Lottie export.

| Script                            | Description                                     |
| --------------------------------- | ----------------------------------------------- |
| `Convert_Drop_Shadow_To_Blur.jsx` | Convert drop shadow to Gaussian blur for Lottie |
| `Prepare_Out_Points.jsx`          | Prepare layer out-points for Lottie             |

### 🔧 Utilities (3 scripts)

General-purpose utilities for timeline navigation and debugging.

| Script                           | Description                    |
| -------------------------------- | ------------------------------ |
| `Alert_Selected_Layer_Index.jsx` | Show selected layer index      |
| `Frame_Navigator.jsx`            | ScriptUI frame navigator panel |
| `Ms_To_Frames.jsx`               | Convert milliseconds to frames |

## 📐 Two Script Patterns

### Pattern A — Self-Contained Scripts

Most scripts in `assets/` follow this pattern. They assume an active AE composition, operate on selected layers, and perform a single focused task:

```javascript
(function () {
  var comp = app.project.activeItem;
  if (!(comp instanceof CompItem)) {
    throw new Error("No active composition.");
  }
  app.beginUndoGroup("My Operation");
  try {
    // ... do work ...
  } catch (e) {
    // ... handle error ...
  } finally {
    app.endUndoGroup();
  }
})();
```

### Pattern B — JSON-Callable Templates

Scripts in `assets/templates/` read parameters from `args.json` and return structured results, designed for integration with external launchers:

```javascript
function doTask(args) {
  var compName = args.compName || "";
  var layerName = args.layerName || "";
  // ... lookup and operate ...
  $.write(JSON.stringify({ success: true, data: result }));
}
```

## ⚙️ Configuration

### After Effects Path

Default AE path in `scripts/run-ae-script.ps1` — **replace with your own path**:

```powershell
# ⚠️ Each user's AE installation path is different — update this to match yours
[string]$AfterEffectsDir = "YOUR_AE_PATH\Adobe After Effects 2025\Support Files"
```

Override via command-line (also replace with your actual path):

```powershell
.\scripts\run-ae-script.ps1 -ScriptPath "script.jsx" -AfterEffectsDir "YOUR_AE_PATH\Support Files"
```

### OpenAI Agent Interface

`agents/openai.yaml` configures the skill for OpenAI-compatible agents:

```yaml
interface:
  display_name: "AE Generation"
  short_description: "Automate After Effects with reliable JSX."
  default_prompt: "Use $ae-dev to create an editable After Effects AE Generation animation."
policy:
  allow_implicit_invocation: true
```

## 🛡️ Reliability Rules

The skill follows these core principles to ensure robust script execution:

1. **Use match names** over localized display names (e.g., `ADBE Transform Group` instead of "Transform")
2. **Never guess effect property indexes** — dump child properties first, then set values
3. **Check every property lookup** before calling `setValue` to avoid `TypeError: null is not an object`
4. **Build `KeyframeEase` arrays** with correct dimensionality (1D for scalar, 2D for position, 3D for 3D layers)
5. **Use 1-based indexes** for AE collections (`project.item(1)`, `layer.property(1)`)
6. **Wrap mutations in undo groups** with `app.beginUndoGroup()` / `app.endUndoGroup()`
7. **Always write a log file** before claiming success
8. **Avoid UI-language dependencies** — match names are stable across all AE localizations

## 📚 References

| Document                                                                  | Size  | Description                                                                 |
| ------------------------------------------------------------------------- | ----- | --------------------------------------------------------------------------- |
| [official-guide.md](references/official-guide.md)                         | 7 KB  | Condensed AE scripting guide — object model, workflow, rendering, keyframes |
| [match-names.md](references/match-names.md)                               | 58 KB | Complete match name reference for transforms, shapes, text, effects         |
| [common-jsx-control-scripts.md](references/common-jsx-control-scripts.md) | 67 KB | Detailed analysis of all 164 scripts with usage patterns                    |

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-script`)
3. **Commit** your changes (`git commit -m 'Add amazing script'`)
4. **Push** to the branch (`git push origin feature/amazing-script`)
5. **Open** a Pull Request

### Script Guidelines

When adding new scripts:

- Use **ExtendScript-safe syntax** (`var`, function declarations, ES3-compatible)
- Wrap mutations in `app.beginUndoGroup()` / `app.endUndoGroup()`
- Include `try/catch/finally` error handling
- Use **match names** instead of localized display names
- Add a header comment with description, author, and date
- Follow the existing naming convention: `Pascal_Case_With_Underscores.jsx`

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

Individual JSX scripts authored by Kyle Martinez include an inline disclaimer:

> "This script is provided 'as is,' without warranty of any kind, expressed or implied. In no event shall the author be held liable for any damages arising in any way from the use of this script."

## 🙏 Acknowledgments

- [Adobe After Effects](https://www.adobe.com/products/aftereffects.html) — the creative platform this project automates
- [Adobe ExtendScript Documentation](https://extendscript.docsforadobe.dev/) — the scripting language reference
- [after-effects-scripts](https://github.com/kyletmartinez/after-effects-scripts) by Kyle Martinez — JSX scripts referenced in `assets/`
- [after-effects-mcp](https://github.com/Dakkshin/after-effects-mcp) by Dakkshin — MCP integration patterns and scripts referenced in `assets/`
- All contributors who have helped build and improve the script library

---

<div align="center">

**Made with ❤️ for the motion design community**

</div>
